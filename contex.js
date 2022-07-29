import React ,{createContext} from 'react';


import {useContext} from 'react';

import App from './App';
//provider Bhejne wala


 const AppProvider =()=>{


const reducer=(stt,action)=>{
if(action.type==="incre"){
console.log(stt)
return stt+1
}

 
if(action.type==="decre"){

return stt-1
}


return stt;
}


const[val,setVal]=React.useState(0)

const[st,dispatch]=React.useReducer(reducer,val);


return(

<p>


<button onClick={()=>{

dispatch({
	type:'incre'
})

}}>add </button>
<button onClick={()=>{

	dispatch({
		type:'decre'
	})
}} >remove </button>
</p>
)

}

export default AppProvider;