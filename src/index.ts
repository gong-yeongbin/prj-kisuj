import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import logger from './logger';
import { scheduleJob } from 'node-schedule';
import { fileUploadSchedule, dailyCandleSchedule } from './scheduler';

const app: Express = express();
const port: number = 3000;

app.get('/', async (req: Request, res: Response) => {
    res.send('Typescript + Node.js + Express Server');
});

app.listen(port, () => {
    logger.info(`Server is running at <https://localhost>:${port}`);

    scheduleJob('0 0 18 * * MON-FRI', fileUploadSchedule);
    scheduleJob('0 1 0 * * TUE-SAT', dailyCandleSchedule);
});
