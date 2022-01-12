//set up express server

const express = require('express');
const app = express();
require('dotenv').config();
const port = 3001;
const cors = require('cors');
app.use(cors());
app.use(express.json());

//setup mysql connection
const mysql = require('mysql');
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});
//connect to database

//post request
app.post('/create', (req, res) => {
	const name = req.body.itemName;
	const price = req.body.itemPrice;
	const quantity = req.body.itemQuantity;
	const category = req.body.itemCategory;
	const origin = req.body.itemOrigin;

	db.query(
		'INSERT INTO item (name, price, quantity, category, origin) VALUES (?,?,?,?,?)',
		[name, price, quantity, category, origin],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send('value added: ' + result);
			}
		}
	);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
