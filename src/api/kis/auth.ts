import axios from 'axios';

export const kisToken = async (): Promise<{
    access_token: string;
    access_token_token_expired: string;
    token_type: string;
    expires_in: number;
}> => {
    const { data } = await axios.post(
        `${process.env.KIS_DOMAIN}/oauth2/tokenP`,
        {
            grant_type: 'client_credentials',
            appkey: process.env.KIS_APP_KEY,
            appsecret: process.env.KIS_SECRET_KEY,
        },
        { headers: { 'Content-Type': 'application/json; charset=UTF-8' } }
    );

    return data;
};
