import axios from 'axios';

export async function test() {
    const { data } = await axios.get(
        `${process.env.DOMAIN}/uapi/domestic-stock/v1/quotations/chk-holiday`,
        {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'authorization':
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2tlbiIsImF1ZCI6IjY0N2Q3Yjg4LWJjNjctNDNhOS1iMDBkLTI3ZmFlOGFlYTcyZCIsImlzcyI6InVub2d3IiwiZXhwIjoxNzA0MzQ5ODM5LCJpYXQiOjE3MDQyNjM0MzksImp0aSI6IlBTVFM3Y3MyZE9NYVpDSkdXQ2VzV1czYTg4VEVwT254UVN2ZSJ9.qeqDRbZtEIT8KXOS2MMEuF9Tg0hVg3T0JuwTK6Q95-FASFV9UDWwT1aANP4jIIF8NW4bvz7gxICjgUvda7QBOw',
                'appkey': process.env.APP_KEY,
                'appsecret': process.env.SECRET_KEY,
                'tr_id': 'CTCA0903R',
                'custtype': 'P',
            },
            params: {
                BASS_DT: '20240104',
                CTX_AREA_NK: '',
                CTX_AREA_FK: '',
            },
        }
    );
    console.log(data.output);
}
