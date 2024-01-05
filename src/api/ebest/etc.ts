import axios from 'axios';

// 주식종목조회 API용
export const t8436 = async (
    accessToken: string,
    gubun: string = '0'
): Promise<
    Array<{
        hname: string;
        shcode: string;
        expcode: string;
        etfgubun: string;
        uplmtprice: number;
        dnlmtprice: number;
        jnilclose: number;
        memedan: string;
        recprice: number;
        gubun: string;
        bu12gubun: string;
        spac_gubun: string;
        filler: string;
    }>
> => {
    const { data } = await axios.post(
        `${process.env.EBEST_DOMAIN}/stock/etc`,
        { t8436InBlock: { gubun: gubun } },
        {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'authorization': `Bearer ${accessToken}`,
                'tr_cd': 't8436',
                'tr_cont': 'N',
                'tr_cont_key': '',
                'mac_address': '',
            },
        }
    );

    return data.t8436OutBlock;
};
