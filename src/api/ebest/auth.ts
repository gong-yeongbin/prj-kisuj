import axios from 'axios';

export const ebestToken = async (): Promise<{
    access_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
}> => {
    const { data } = await axios.post(
        `${process.env.EBEST_DOMAIN}/oauth2/token`,
        {
            grant_type: 'client_credentials',
            appkey: process.env.EBEST_APP_KEY,
            appsecretkey: process.env.EBEST_SECRET_KEY,
            scope: 'oob',
        },
        {
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }
    );

    return data;
};
