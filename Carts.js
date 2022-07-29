import React from 'react';
import {NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import {deletetodo} from "./actions/index";
const Carts = ({mal,totalpro,setTotalpro}) => {
let seletcarts=useSelector(r=>r.changeTheNumber.list)

let dispatchh=useDispatch();

const remove=(rem)=>{
setTotalpro(totalpro-1)
dispatchh(deletetodo(rem))
}

  return (
    <div>
    <p>total carts {totalpro}</p>
{/*
total addtocartrs
*/}

{
seletcarts.length>=1 &&
seletcarts.map((j)=>{

return(
<>
<p>
{j.name}

</p>

<button  onClick={()=>{
	remove(j)
}}>removecart</button>
</>)

})

}



{
	mal.map((dat)=>{

return(

<div>
{dat.name}
{dat.price}
<NavLink to={`/cartss/${dat.id}`}>jjj</NavLink>


</div>
	)

	})
}



    </div>
  )
}

export default Carts;