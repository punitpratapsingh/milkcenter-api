/**
 * This is the machineTest constant file
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */

export const {
	NODE_ENV = 'development',
	S3_BUCKET = '',
	ATLAS_USER,
	ATLAS_PASSWORD,
	ATLAS_CLUSTER,
	SECRET_STRING,
	PAGINATION_LIMIT = 20,
	FILE_SIZE_LIMIT = '3mb',
	API_KEY,
	API_RATE_LIMIT_TIME = 15, // in minute
	API_RATE_LIMIT_COUNT = 100,
} = process.env;

const db = process.env.MONGO_DB || 'machineTest';

export const mongoConnectionString = `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@${ATLAS_CLUSTER}/${db}?retryWrites=true`;

export const secretString = SECRET_STRING;

export const STATUS_CODES = {
	SUCCESS: 200,
	INVALID_AUTHORIZATION: 401,
	MISSING_RERUIRED_PARAMETERS: 402,
	INVALID_DATA: 403,
	EXCEPTION: 501,
};
