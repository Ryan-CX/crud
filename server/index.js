//set up express server

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const ItemModel = require('./models/items');

//connect to mongoose
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('connected to mongoose');
	}
);

//create a new item
app.post('/insert', async (req, res) => {
	const name = req.body.name;
	const price = req.body.price;
	const quantity = req.body.quantity;
	const category = req.body.category;
	const origin = req.body.origin;

	const itemInfo = new ItemModel({
		name: name,
		price: price,
		quantity: quantity,
		category: category,
		origin: origin,
	});
	try {
		await itemInfo.save();
	} catch (error) {
		console.log(error);
	}
});

//get all items
app.get('/read', async (req, res) => {
	ItemModel.find({}, (err, items) => {
		if (err) {
			console.log(err);
		} else {
			res.send(items);
		}
	});
});

//update item
app.put('/update/:id', async (req, res) => {
	const id = req.params.id;
	const name = req.body.name;
	const price = req.body.price;
	const quantity = req.body.quantity;
	const category = req.body.category;
	const origin = req.body.origin;

	try {
		await ItemModel.findByIdAndUpdate(id, {
			name: name,
			price: price,
			quantity: quantity,
			category: category,
			origin: origin,
		});
	} catch (error) {
		console.log(error);
	}
});

//delete item
app.delete('/delete/:id', async (req, res) => {
	const id = req.params.id;
	try {
		await ItemModel.findByIdAndDelete(id);
	} catch (error) {
		console.log(error);
	}
});

const port = 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
