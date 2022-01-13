//setup data model schema mongodb

const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	origin: {
		type: String,
		required: true,
	},
});

const Item = mongoose.model('ItemData', itemSchema);
module.exports = Item;
