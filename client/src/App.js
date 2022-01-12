import './App.css';
import { useState } from 'react';
function App() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [category, setCategory] = useState('');
	const [origin, setOrigin] = useState('');

	const displayInfo = () => {
		console.log(
			`Name: ${name}  Price: ${price}  Quantity: ${quantity}  Category: ${category}  Origin: ${origin}`
		);
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
				<button onClick={displayInfo}>Add Item</button>
			</div>
		</div>
	);
}

export default App;
