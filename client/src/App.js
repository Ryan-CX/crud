import './App.css';
import { useState } from 'react';
//import axios
import axios from 'axios';

function App() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [category, setCategory] = useState('');
	const [origin, setOrigin] = useState('');

	//click button to add item
	const addItem = () => {
		axios
			.post('http://localhost:3001/create', {
				itemName: name,
				itemPrice: price,
				itemQuantity: quantity,
				itemCategory: category,
				itemOrigin: origin,
			})
			.then(() => {
				console.log('success');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='App'>
			<div className='information'>
				<label>Name:</label>
				<input
					type='text'
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<label>Price:</label>
				<input
					type='text'
					onChange={(e) => {
						setPrice(e.target.value);
					}}
				/>
				<label>Quantity:</label>
				<input
					type='text'
					onChange={(e) => {
						setQuantity(e.target.value);
					}}
				/>
				<label>Category:</label>
				<input
					type='text'
					onChange={(e) => {
						setCategory(e.target.value);
					}}
				/>
				<label>Origin:</label>
				<input
					type='text'
					onChange={(e) => {
						setOrigin(e.target.value);
					}}
				/>
				<button onClick={addItem}>Add Item</button>
			</div>
		</div>
	);
}

export default App;
