/**
 * This schema represents the milk center
 * @author Punit Pratap Singh
 * @since 19 Jul, 2021
 */

import { Schema } from 'mongoose';
import database from '../db';

const milkCenter = new Schema({
	name: { type: String, required: true },
	timings: { type: Object, required: true },
	address: {
		location: String,
		type: { type: String, default: 'Point' },
		coordinates: [Number],
	},
	deleted: { type: Boolean, default: false },
}, { timestamps: true });

milkCenter.index({ address: '2dsphere' });

export default database.model('User', milkCenter);
