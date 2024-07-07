'use server';

import { authKey } from '@/constant/global';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const setAccessToken = (token, option) => {
    cookies().set(authKey, token);
    if (option && option.redirect) {
        redirect(option.redirect);
    }
};

export default setAccessToken;