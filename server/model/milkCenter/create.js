import { MilkCenterModel } from '../../schemas';
import { STATUS_CODES } from '../../constants';

/**
 * @description API to create milk center
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */

export default ({
	name,
	timings,
	location,
	coordinates,
}) => new Promise(async (resolve, reject) => {
	try {
		const newCenter = new MilkCenterModel({
			name,
			timings,
			address: {
				location,
				coordinates,
			},
		});
		console.log(newCenter);
		await newCenter.save();
		return resolve({
			code: STATUS_CODES.SUCCESS,
			data: {
				message: 'New Milk Center Created',
				newCenter,
			},
		});
	} catch (err) {
		return resolve({ code: STATUS_CODES.EXCEPTION, data: { error: err, message: err.message } });
	}
});
