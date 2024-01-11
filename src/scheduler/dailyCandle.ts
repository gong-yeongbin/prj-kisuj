import { ebestToken } from '../api/ebest/auth';
import { t8436 } from '../api/ebest/etc';
import { t8410 } from '../api/ebest/stock';
import { putDynamodb } from '../aws';

export const dailyCandleSchedule = async () => {
    const ebestAuth = await ebestToken();
    const t8436Data = await t8436(ebestAuth.access_token);
    const t8436Filter = t8436Data.filter(
        (value) => value.etfgubun == '0' && value.spac_gubun == 'N'
    );

    for (let i = 0; i < t8436Filter.length; i++) {
        const item = await t8410(ebestAuth.access_token, t8436Filter[i].shcode);
        item.t8410OutBlock1[0]['shcode'] = t8436Filter[i].shcode;

        const data = { TableName: 'DailyCandle', Item: item.t8410OutBlock1[0] };
        putDynamodb(data);
    }
};
