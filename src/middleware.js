
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { authKey } from './constant';
import { jwtDecode } from 'jwt-decode';

const AuthRoutes = ['/sign_in', '/register'];
const commonPrivateRoutes = ['/dashboard', '/profile'];
const roleBasedPrivateRoutes = {
    student: [/^\/dashboard\/student/],
    tutor: [/^\/dashboard\/tutor/],
};

export function middleware(request) {
    const { pathname } = request.nextUrl;
    
    const accessToken = cookies().get(authKey)?.value;

    // Redirect to sign_in if no access token is found and the route is not public
    if (!accessToken) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/sign_in', request.url));
        }
    }

    // Allow access to common private routes if access token exists
    if (accessToken && (commonPrivateRoutes.includes(pathname) || commonPrivateRoutes.some(route => pathname === route))) {
        return NextResponse.next();
    }

    // Decode the JWT to get user role information
    let decodedData = null;
    if (accessToken) {
        try {
            decodedData = jwtDecode(accessToken);
        } catch (error) {
            console.error('Failed to decode JWT:', error);
            return NextResponse.redirect(new URL('/sign_in', request.url));
        }
    }

    const role = decodedData?.role;

    // Allow access to role-based routes if the role matches
    if (role && roleBasedPrivateRoutes[role]) {
        const routes = roleBasedPrivateRoutes[role];
        if (routes.some(route => pathname.match(route))) {
            return NextResponse.next();
        } else {
            // If the role does not match any role-based private routes, redirect to home
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    // Redirect to home if no routes match
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: [
        '/dashboard',
        '/dashboard/tutor/:page*',
        '/dashboard/student/:page*',
        '/profile'
    ],
};
