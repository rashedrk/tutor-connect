import { authKey } from '@/constant/global';
import { decodedToken } from '@/utils/jwt-helpers';
import { getFromLocalStorage } from '@/utils/local-storage';
import { useEffect, useState } from 'react';

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState('');
    

    useEffect(() => {
        const fetchUserInfo = () => {
            const authToken = getFromLocalStorage(authKey);
            if (authToken) {
                const decodedData = decodedToken(authToken);
                const userInfo = {
                    ...decodedData,
                    role: decodedData?.role || '',
                };
                setUserInfo(userInfo);
            } else {
                setUserInfo('');
            }
        };

        fetchUserInfo();
    }, []);

    return userInfo;
};

export default useUserInfo;