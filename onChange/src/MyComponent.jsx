import React, {useState} from 'react';
function MyComponent() {
    const [name, setName] = useState('temp');
    const [num, setNum] = useState(0);
    const [payment, setPayment] = useState('');
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleNumChange(e) {
        setNum(e.target.value);
    }
    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }
  return (<div> 
    <input value={name} onChange={handleChange} />
    <p>Hello, {name}!</p>
    <input value={num} onChange={handleNumChange} type="number"/>
    <p>{num}!</p>
    <label htmlFor="payment">Payment Method:</label>
    <b>{payment}</b>
    <br/>
    <select value={payment} onChange={handlePaymentChange}>
        <option value="cash">Cash</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="other">Other</option>
    </select>
  </div>);
}
export default MyComponent;