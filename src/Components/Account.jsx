import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/userActions';

const Account = () => {
    const [input, setInput] = useState(0)
    const balance = useSelector((state)=>state.balance)
    const dispatch = useDispatch()
    
    const _handleIncrement = (e) => {
        e.preventDefault();
        console.log("deposit button clicked");
        dispatch(increment(input))
        setInput(0)
    }
    const _handleDecrement = (e) => {
        e.preventDefault();
        console.log("Withdraw button clicked");
        dispatch(decrement(input))
        setInput(0)
    }
  return (
    <div>Account Balance 
        <h3>{balance}</h3>
        <form>
            <label>
                Deposit or Withdraw
                <input value={input || ""} placeholder='Enter Amount' onChange={(e)=>setInput(Number(e.target.value))}/>
            </label>
            <button onClick={(e) => _handleIncrement(e)}>Deposit</button>
            <button onClick={(e) => _handleDecrement(e)}>Withdraw</button>
        </form>
    </div>
  )
}

export default Account;
