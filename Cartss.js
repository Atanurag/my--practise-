import React from 'react';
import {useParams} from 'react-router-dom'
import {addtodo,deletetodo} from './actions/index';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
const Cartss = ({mal,totalpro,setTotalpro}) => {

const {idd}=useParams();

let singlepro=mal.filter(x=>x.id==idd);

console.log(singlepro)





const dispatch=useDispatch();
const p=useSelector((p)=>p.changeTheNumber.list)
const incre=(ss)=>{

	setTotalpro(totalpro+1)
dispatch(addtodo(ss))
}


console.log(p.id)
  return (
    <div>

<div>


{
singlepro.map((ss)=>{
return(
<>
{ss.name}
{ss.desc}
<button

onClick={()=>{
incre(ss)

}}
>add to cart</button>
</>

)

})

}
</div>


    </div>
  )
}

export default Cartss;