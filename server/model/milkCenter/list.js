import { MilkCenterModel } from '../../schemas';
import { STATUS_CODES, PAGINATION_LIMIT } from '../../constants';

/**
 * @description API to list milk center by coordintes
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */

export default ({
	page = 1,
	limit = PAGINATION_LIMIT,
	coordinates,
}) => new Promise(async (resolve, reject) => {
	try {
		let aggregateQuery = [];
		if (coordinates && coordinates.length === 2) {
			aggregateQuery = [
				{
					$geoNear: {
						near: { type: 'Point', coordinates },
						distanceMultiplier: 0.001,
						distanceField: 'distance.calculated',
						maxDistance: 999999 * 1000,
						query: { deleted: false },
						includeLocs: 'distance.location',
						spherical: true,
					},
				}];
		} else {
			aggregateQuery = [
				{
					$match: {
						deleted: false,
					},
				},
				{
					$sort: { createdAt: -1 },
				},
			];
		}

		aggregateQuery.push(
			{ $skip: (page - 1) * limit },
			{ $limit: limit },
		);

		const milkCentersList = await MilkCenterModel.aggregate(aggregateQuery);

		return resolve({
			code: STATUS_CODES.SUCCESS,
			data: milkCentersList,
		});
	} catch (err) {
		return resolve({ code: STATUS_CODES.EXCEPTION, data: { error: err, message: err.message } });
	}
});
