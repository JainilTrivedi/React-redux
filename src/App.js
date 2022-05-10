import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux'
import {increase,decrease} from './actions/index';

const App = () => {
  const myState  = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();  // to cal increase and decrease function on onClick = 
  return (
    <>
      <h1>Redux Trials</h1> 
      
      <div className='container'>
        <div className='quantity'>
          <a className='quantity_minus' title='Decrement' onClick={ ()=>dispatch(decrease())} > <span>-</span> </a>
          <input name='quantity' type="text" className='quantity_input' value={myState} />
          <a className='quantity_plus' title='Increment' onClick={ ()=>dispatch(increase()) } >
            <span>+</span>
          </a>

        </div>
      </div>

    </>
  )
}

export default App
