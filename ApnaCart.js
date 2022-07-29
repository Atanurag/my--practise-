import React from 'react';
import ApnaCart2 from './ApnaCart2';

const ApnaCart = (props) => {

const product=[
{
mobil:"redmi",
quantity:0,
price:2000

},
{

mobil:"nokia",
quantity:0,
price:1000
},

{
mobil:"samsung",
quantity:0,
price:4000

}
];


const[prod,setProd]=React.useState(product);
const[tot,setTot]=React.useState(0);
const[showPro,setShowPro]=React.useState(false);
const[namee,setNamee]=React.useState("");
const[pricee,setPricee]=React.useState("");

const increment =(index)=>{

let newarr=[...prod];

newarr[index].quantity++;

let newtotal=tot;

newtotal+=newarr[index].price;

setTot(newtotal)

setProd(newarr)
}




const decrement =(index)=>{

let newtotal=tot;
let newarr=[...prod];

if(newarr[index].quantity>0){

newarr[index].quantity--;

newtotal-=newarr[index].price;

}
setTot(newtotal)

setProd(newarr)


}



const reset=()=>{
let newtotal=tot;
let newarr=[...prod];
for(let v=0;v<3;v++){

newarr[v].quantity=0;

}
newtotal=0;
setTot(newtotal)
setProd(newarr)
}





const Remove=(index)=>{
let newarr=[...prod];
newarr.splice(index,1);
setProd(newarr)
if(newarr.length===0){

setShowPro(true)

}
}


const add=(name,price)=>{


let newarr=[...prod];

newarr.push({

	name:name,
	price:price,
	quantity:0
})
setProd(newarr)
}


  return (
    <div>
<form  onSubmit={(e)=>{
e.preventDefault();



}}>
<input type="text" placeholder="name" value={namee} onChange={(e)=>{
setNamee(e.target.value)


}}/>

<input type="text" placeholder="price" value={pricee} onChange={(e)=>{
setPricee(e.target.value)


}} />
<button type="submit" onClick={()=>{
	add(namee,pricee);
}}>submit</button>
</form>
    {

     prod.map((pro,i)=>{

return(

<ApnaCart2 {...pro} key={i}  Remove={Remove} increment={increment} ind={i} decrement={decrement}/>
	)


     })	
    }

{showPro?"No Products":""}
<button onClick={
()=>{

reset();

}

}>reset</button>		

<p>total{tot}</p>

    </div>
  )
}

export default ApnaCart;