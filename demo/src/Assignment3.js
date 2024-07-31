import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Assignment3() {

  const dumpyData = [
    {
      name : 'coffee',
      price : 300,
      quantity : 5
    },
    {
      name : 'milk',
      price : 300,
      quantity : 6
    },
    {
      name : 'water',
      price : 300,
      quantity : 5
    },
  ]


  const [data,setData] = useState(dumpyData);
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [quantity,setQuantity] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(event.target.value)
  }

  const handleQuantity = (event) => {
    setQuantity(event.target.value)
  }

  const handleAdd = () => {
    const product = 
      {
        name : name,
        price : price,
        quantity : quantity
      }
    setData([...data,product]);
  }

  const handleDelete = (index) => {
    setData([...data].filter((item,key) => key !== index))
  }

  const handleEdit = (index) => {
    const editedItem = [...data].filter((item,key) => key === index)[0];
    setName(editedItem.name);
    setPrice(editedItem.price)
    setQuantity(editedItem.quantity)
  }

  return (
    <div className="assignment3">
     Name:<input type="text" value={name} id='itemName' onChange={handleName} />
    Price:<input type="text" value={price} id='itemPrice' onChange={handlePrice} />
    Quantity:<input type="text" value={quantity} id='itemQuantity' onChange={handleQuantity} />
    <button onClick={handleAdd}>Add</button>
    <table id='myTable'>
        <thead>
          <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index) => (
              <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                  <td><button onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </div>
  );
}

export default Assignment3;
