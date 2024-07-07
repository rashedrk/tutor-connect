
import { authKey } from "@/constant/global";
import { decodedToken } from "@/utils/jwt-helpers";
import {
    getFromLocalStorage,
    removeFromLocalStorage,
    setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }) => {
    return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        const decodedData = decodedToken(authToken);
        return {
            ...decodedData,
            role: decodedData?.role,
        };
    }
};

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
        return !!authToken;
    }
};

export const removeUser = () => {
    return removeFromLocalStorage(authKey);
};