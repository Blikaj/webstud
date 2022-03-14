import React,{useState} from 'react';

const user = function{
        const[count, setCount] = useState(0)
		
		function plus(){
			setCount(count +1)
		}
		function minus(){
			setCount(count -1)
		}
		
		return(
			<div className='user'>
				<h1>Савин Алексей 19 лет</h1>
				<h2>{count}</h2>
				<button onClick={plus}>+</button>
				</br>
				<button onClick={minus}>-</button>
			</div>
		)
	}
export default App;
