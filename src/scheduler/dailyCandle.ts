import { ebestToken } from '../api/ebest/auth';
import { t8436 } from '../api/ebest/etc';
import logger from '../logger';
import { t8410 } from '../api/ebest/stock';

export const dailyCandleSchedule = async () => {
    const ebestAuth = await ebestToken();
    const t8436Data = await t8436(ebestAuth.access_token);
    const t8436Filter = t8436Data.filter(
        (value) => value.etfgubun == '0' && value.spac_gubun == 'N'
    );

    for (let i = 0; i < t8436Filter.length; i++) {
        const data = await t8410(ebestAuth.access_token, t8436Filter[i].shcode);
        data.t8410OutBlock1[0]['shcode'] = t8436Filter[i].shcode;
        logger.info(JSON.stringify(data.t8410OutBlock1[0]));
    }
};
