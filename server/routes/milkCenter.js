/**
 * @description
 * This is the route handler for the milk center
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */

import {
	MilkCenterControllers,
} from '../controllers';

const prefix = '/api/milkCenter/';

export default (app) => {
	app.put(`${prefix}create`, MilkCenterControllers.create);
	app.get(`${prefix}list`, MilkCenterControllers.list);
};
