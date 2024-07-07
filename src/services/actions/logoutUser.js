
import { authKey } from '@/constant/global';
import { deleteCookies } from './deleteCookies';

export const logoutUser = (router) => {
    localStorage.removeItem(authKey);
    deleteCookies([authKey, 'refreshToken']);
    router.push('/');
    router.refresh();
};