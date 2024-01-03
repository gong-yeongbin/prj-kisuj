import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import logger from './logger';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Typescript + Node.js + Express Server');
});

app.listen(port, () => {
    logger.info(`Server is running at <https://localhost>:${port}`);
});
