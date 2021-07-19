/**
 * @description
 * This is the constroller for the milk centers
 * @author PunitPratap Singh
 * @since 19 Jul, 2021
 */

import { MilkCenterModel } from '../model';
import { ModelResolver } from './resolvers';

export default {
	create: (req, res) => ModelResolver(req, res, MilkCenterModel.MilkCenterCreate),
	list: (req, res) => {
		const {
			query: {
				page, limit, coordinates,
			},
		} = req;
		MilkCenterModel.MilkCenterList({
			page: page ? Number(page) : undefined,
			limit: limit ? Number(limit) : undefined,
			coordinates: coordinates ? JSON.parse(coordinates) : undefined,
		}).then(
			success => res.status(success.code).send(success.data),
			error => res.status(error.code).send(error.data),
		);
	},
};
