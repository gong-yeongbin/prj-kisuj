import axios from 'axios';
import { delay } from '../../util/delay';
import dayjs from 'dayjs';

// API전용주식챠트(일주월년)
export const t8410 = async (
    accessToken: string,
    shcode: string,
    gubun: string = '2',
    qrycnt: number = 500,
    date: string = dayjs().subtract(1, 'day').format('YYYYMMDD')
): Promise<{
    t8410OutBlock: {
        shcode: string;
        jisiga: number;
        jihigh: number;
        jilow: number;
        jiclose: number;
        jivolume: number;
        disiga: number;
        dihigh: number;
        dilow: number;
        diclose: number;
        highend: number;
        lowend: number;
        cts_date: string;
        s_time: string;
        e_time: string;
        dshmin: string;
        rec_count: number;
        svi_uplmtprice: number;
        svi_dnlmtprice: number;
    };
    t8410OutBlock1: [
        {
            date: string;
            open: number;
            high: number;
            low: number;
            close: number;
            jdiff_vol: number;
            value: number;
            jongchk: number;
            rate: string;
            pricechk: number;
            ratevalue: number;
            sign: string;
        },
    ];
    rsp_cd: string;
    rsp_msg: string;
}> => {
    const { data } = await axios.post(
        `${process.env.EBEST_DOMAIN}/stock/chart`,
        {
            t8410InBlock: {
                shcode: shcode,
                gubun: gubun,
                qrycnt: 1,
                sdate: date,
                edate: date,
                cts_date: '',
                comp_yn: 'N',
                sujung: 'Y',
            },
        },
        {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'authorization': `Bearer ${accessToken}`,
                'tr_cd': 't8410',
                'tr_cont': 'N',
                'tr_cont_key': '',
                'mac_address': '',
            },
        }
    );

    await delay(1000);

    return data;
};
