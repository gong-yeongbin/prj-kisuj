import axios from 'axios';
import logger from '../../logger';

// : Promise<{
//     rt_cd: string;
//     msg_cd: string;
//     msg1: string;
//     output1: {
//         'prdy_vrss': string;
//         'prdy_vrss_sign': string;
//         'prdy_ctrt': string;
//         'stck_prdy_clpr': string;
//         'acml_vol': string;
//         'acml_tr_pbmn': string;
//         'hts_kor_isnm': string;
//         'stck_prpr': string;
//         'stck_shrn_iscd': string;
//         'prdy_vol': string;
//         'stck_mxpr': string;
//         'stck_llam': string;
//         'stck_oprc': string;
//         'stck_hgpr': string;
//         'stck_lwpr': string;
//         'stck_prdy_oprc': string;
//         'stck_prdy_hgpr': string;
//         'stck_prdy_lwpr': string;
//         'askp': string;
//         'bidp': string;
//         'prdy_vrss_vol': string;
//         'vol_tnrt': string;
//         'stck_fcam': string;
//         'lstn_stcn': string;
//         'cpfn': string;
//         'hts_avls': string;
//         'per': string;
//         'eps': string;
//         'pbr': string;
//         'itewhol_loan_rmnd_ratem name': string;
//     };
//     output2: [
//         {
//             stck_bsop_date: string;
//             stck_clpr: string;
//             stck_oprc: string;
//             stck_hgpr: string;
//             stck_lwpr: string;
//             acml_vol: string;
//             acml_tr_pbmn: string;
//             flng_cls_code: string;
//             prtt_rate: string;
//             mod_yn: string;
//             prdy_vrss_sign: string;
//             prdy_vrss: string;
//             revl_issu_reas: string;
//         },
//     ];
// }>
// 국내주식기간별시세(일/주/월/년)[v1_국내주식-016]
export const inquireDailyItemchartprice = async (accessToken: string, shcode: string) => {
    axios
        .get(
            `${process.env.KIS_DOMAIN}/uapi/domestic-stock/v1/quotations/inquire-daily-itemchartprice`,
            {
                headers: {
                    'content-type': 'application/json; charset=utf-8',
                    'authorization': `Bearer ${accessToken}`,
                    'appkey': process.env.KIS_APP_KEY,
                    'appsecret': process.env.KIS_SECRET_KEY,
                    'tr_id': 'FHKST03010100',
                    'custtype': 'P',
                },
                params: {
                    FID_COND_MRKT_DIV_CODE: 'J',
                    FID_INPUT_ISCD: shcode,
                    FID_INPUT_DATE_1: '20240105',
                    FID_INPUT_DATE_2: '20240105',
                    FID_PERIOD_DIV_CODE: 'D',
                    FID_ORG_ADJ_PRC: '0',
                },
            }
        )
        .then((response) => {
            logger.info(response.data.output1);
        })
        .catch((error) => {
            logger.error(error);
        });
};
