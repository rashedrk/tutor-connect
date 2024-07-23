import { decodedToken } from '@/utils/jwt-helpers';
import setAccessToken from './setAccessToken';

export const userLogin = async (data) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
            // cache: "no-store",
        }
    );
    const userInfo = await res.json();
    // console.log(userInfo);

    if (userInfo.data.accessToken) {
        const user = decodedToken(userInfo.data.accessToken);
        const path = {
            redirect: '/'
        };
        if (user.role === 'admin' || user.role === 'tutor') {
            path.redirect = '/dashboard'
        };
        setAccessToken(userInfo.data.accessToken, path);
    }

    return userInfo;
};