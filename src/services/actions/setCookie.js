'use server';


import { authKey } from '@/constant/global';
import { cookies } from 'next/headers';


const setAccessToken = (token) => {
    cookies().set(authKey, token);

};

export default setAccessToken;