
/**
 * this contains the database connection specification
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */

import mongoose from 'mongoose';
import { Promise as es6Promise } from 'es6-promise';
import { mongoConnectionString } from '../constants';

const useNewUrlParser = true;
const useCreateIndex = true;
const useUnifiedTopology = true;
mongoose.Promise = es6Promise;
mongoose.connect(mongoConnectionString, {
	useNewUrlParser, useCreateIndex, useUnifiedTopology,
}, (err) => {
	if (err) {
		console.log('mongo connection err', err);
	} else {
		console.log('database connected');
	}
});

export default mongoose;
