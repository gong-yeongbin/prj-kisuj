import AWS from 'aws-sdk';
import logger from './logger';
import dayjs from 'dayjs';

AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
});
const s3 = new AWS.S3();

export const uploadFile = (content) => {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${dayjs().subtract(1, 'day').format('YYYY-MM-DD')}`,
        Body: content,
    };
    s3.upload(params, function (err, data) {
        if (err) {
            logger.error(err);
        } else {
            logger.info('file uploaded successfully.');
        }
    });
};

const dynamoDB = new AWS.DynamoDB.DocumentClient();
export const putDynamodb = (input: {
    TableName: string;
    Item: {
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
        shcode?: string;
    };
}) => {
    dynamoDB.put(input, (err, data) => {
        if (err) {
            logger.error(err);
        } else {
            logger.info(`${JSON.stringify(input)}`);
        }
    });
};
