import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import logger from './logger';
import fs from 'fs';
import { uploadFile } from './aws';
import dayjs from 'dayjs';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    // const content: string = fs.readFileSync(`${process.cwd()}/logs/2024-01-03.log`, 'utf-8');
    //
    // uploadFile(content);
    res.send('Typescript + Node.js + Express Server');
});

app.listen(port, () => {
    logger.info(`Server is running at <https://localhost>:${port}`);
});
