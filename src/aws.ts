import AWS from 'aws-sdk';
import logger from './logger';
import dayjs from 'dayjs';

AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
});

export const uploadFile = (content) => {
    const s3 = new AWS.S3();

    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${dayjs().format('YYYY-MM-DD')}`,
        Body: content,
    };
    s3.upload(params, function (err, data) {
        if (err) {
            logger.error(err);
        }

        logger.info('file uploaded successfully.');
    });
};
