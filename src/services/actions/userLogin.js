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
        setAccessToken(userInfo.data.accessToken, {
            redirect: '/',
        });
    }

    return userInfo;
};