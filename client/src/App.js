import './App.css';
import { useState, useEffect } from 'react';
//import axios
import axios from 'axios';

function App() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [category, setCategory] = useState('');
	const [origin, setOrigin] = useState('');
	const [itemList, setItemList] = useState([]);
	//set up the filter
	const [search, setSearch] = useState('');

	//get all items as page loads
	useEffect(() => {
		axios.get('http://localhost:3001/read').then((response) => {
			setItemList(response.data);
		});
	}, []);

	//click button to add item, after added, refresh page
	const addItem = () => {
		axios
			.post('http://localhost:3001/insert', {
				name: name,
				price: price,
				quantity: quantity,
				category: category,
				origin: origin,
			})
			.then(() => {
				console.log('success');
			})

			.catch((err) => {
				console.log(err);
			});
		window.location.reload();
	};

	//update item
	const updateName = (id) => {
		axios.put(`http://localhost:3001/update/${id}`, {
			name: name,
		});
		window.location.reload();
	};

	//delete item
	const deleteItem = (id) => {
		axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
			console.log('success');
		});
		window.location.reload();
	};

	const updatePrice = (id) => {
		axios.put(`http://localhost:3001/update/${id}`, {
			price: price,
		});
		window.location.reload();
	};

	const updateQuantity = (id) => {
		axios.put(`http://localhost:3001/update/${id}`, {
			quantity: quantity,
		});
		window.location.reload();
	};
	const updateCategory = (id) => {
		axios.put(`http://localhost:3001/update/${id}`, {
			category: category,
		});
		window.location.reload();
	};
	const updateOrigin = (id) => {
		axios.put(`http://localhost:3001/update/${id}`, {
			origin: origin,
		});
		window.location.reload();
	};
	//filter items

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
					type='number'
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

			{/* add a search bar */}
			<div className='search'>
				<input
					type='text'
					placeholder='Type Keyword to filter'
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			{/* filter the list based on keywords in the search bar */}

			<div className='list'>
				<h1>Item List</h1>
				{itemList
					.filter((item) => {
						if (search == '') {
							return item;
						} else if (
							item.name.toLowerCase().includes(search.toLowerCase()) ||
							item.category.toLowerCase().includes(search.toLowerCase()) ||
							item.origin.toLowerCase().includes(search.toLowerCase())
						) {
							return item;
						}
					})

					.map((item, key) => {
						return (
							<div className='item' key={key}>
								<div>
									<h3>{item.name}</h3>
									<input
										type='text'
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
									<button onClick={() => updateName(item._id)}>Edit</button>
								</div>
								<div>
									<p>{item.price}</p>
									<input
										type='text'
										onChange={(e) => {
											setPrice(e.target.value);
										}}
									/>
									<button onClick={() => updatePrice(item._id)}>Edit</button>
								</div>
								<div>
									<p>{item.quantity}</p>
									<input
										type='text'
										onChange={(e) => {
											setQuantity(e.target.value);
										}}
									/>
									<button onClick={() => updateQuantity(item._id)}>Edit</button>
								</div>
								<div>
									<p>{item.category}</p>
									<input
										type='text'
										onChange={(e) => {
											setCategory(e.target.value);
										}}
									/>
									<button onClick={() => updateCategory(item._id)}>Edit</button>
								</div>
								<div>
									<p>{item.origin}</p>
									<input
										type='text'
										onChange={(e) => {
											setOrigin(e.target.value);
										}}
									/>
									<button onClick={() => updateOrigin(item._id)}>Edit</button>
								</div>

								<button onClick={() => deleteItem(item._id)}>Delete</button>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default App;
