/**
 * This is the server file for machineTest
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */

import express from 'express';
import busboyBodyParser from 'busboy-body-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import ActivateRoutes from './routes';
import { FILE_SIZE_LIMIT, API_RATE_LIMIT_COUNT, API_RATE_LIMIT_TIME } from './constants';

const app = express();

// enable cors support
app.use(cors({
	origin: '*',
	methods: ['GET', 'POST'],
	allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-HTTP-Method-Override', 'Accept'],
	credentials: true,
}));

// use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboyBodyParser({ limit: FILE_SIZE_LIMIT }));

// use morgan for request logs
app.use(morgan('dev'));

// api rate limiter
const limiter = rateLimit({
	windowMs: API_RATE_LIMIT_TIME * 60 * 1000,
	max: API_RATE_LIMIT_COUNT, // limit each IP to 100 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

// call this to activate routes or define inside the route directory
ActivateRoutes(app);

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
app.get('/', (req, res) => res.send(`<h1>machineTest ${env} environment</h1>`));

const port = process.env.NODE_ENV === 'development' ? 3000 : 3001;

app.listen(port, () => console.log(`Backend is running on port ${port}`));
