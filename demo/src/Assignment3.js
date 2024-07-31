import logo from './logo.svg';
import './App.css';

function Assignment3() {
  return (
    <div className="assignment3">
     Name:<input type="text" id='itemName' />
    Price:<input type="text" id='itemPrice' />
    Quantity:<input type="text" id='itemQuantity' />
    <button >Add</button>
    <table id='myTable'>
        <tbody>
          <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
          </tr>
        </tbody>
    </table>
    </div>
  );
}

export default Assignment3;
