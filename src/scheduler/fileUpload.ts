import * as fs from 'fs';
import { uploadFile } from '../aws';
import dayjs from 'dayjs';
import logger from '../logger';

export const fileUploadSchedule = () => {
    const filePath: string = `${process.cwd()}/logs/${dayjs()
        .subtract(1, 'day')
        .format('YYYY-MM-DD')}.log`;

    fs.stat(filePath, (err, stats) => {
        if (err) {
            logger.error(err);
        } else {
            if (stats.size > 0) {
                const content: string = fs.readFileSync(filePath, 'utf-8');
                uploadFile(content);
            } else {
                logger.info('The log file size is 0.');
            }
        }
    });
};
