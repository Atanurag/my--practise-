
import React,{useContext} from 'react';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from "react-router-dom";
import Nav from './Nav';

import AppProvider from './contex'

import Cartss from './Cartss'
import Carts from './Carts'

import ApnaCart from './ApnaCart';

import ApnaCart2 from './ApnaCart2';


import Maal from './maal';


import Stockdata from './Stockdata'

import {addtodo,deletetodo,updatetodo} from './actions/index';

import {useSelector,useDispatch} from 'react-redux';

function App() {
{/*my created products*/}

const[mal,setMal]=React.useState(Maal);
const[selectedmal,setSelectedmal]=React.useState([]);

const[carttotal,setCarttotal]=React.useState(0);
const  sendmal=(aa)=>{

setCarttotal(carttotal+1)
console.log(selectedmal)
setSelectedmal([...selectedmal,{...aa}]);
}







{/*my created products*/}


console.log(mal)

const[ind,setInd]=React.useState(0);

let re=React.useRef(null);

const[che,setChe]=React.useState(true);


let u=9;


 let ooo=()=>{
re.current.innerText="kkkkk"

}
  

let k=[

{

 n:"1",
 ll:1000 
}
,
{

 n:"2",
 ll:2000 
}
]


const { n,ll}=k[ind]

console.log(k[ind])

 let ttt=()=>{


}





let y=[

{
id:0,
nam:"lll0",

},
{
id:1,
nam:"lll1",

},
{
id:2,
nam:"lll2",

}

]
const[arr,setArr]=React.useState(y);


let err1=[

{
	i:0,
id:"0item",
nam:1000,
btnshow:false


},
{i:1,
id:"1item",
nam:2000,
btnshow:false

},
{i:2,
id:"2item",
nam:3000,
btnshow:false

},
{
	i:3,
id:"3item",
nam:1000,
btnshow:false

},
{i:4,
id:"4item",
nam:2000,

},
{i:5,
id:"5item",
nam:3000,
btnshow:false

},{
	i:6,
id:"6item",
nam:1000,
btnshow:false
},
{i:7,
id:"7item",
nam:2000,
btnshow:false
},
{i:8,
id:"8item",
nam:3000,
btnshow:false
},{
	i:9,
id:"9item",
nam:1000,
btnshow:false

},
{i:10,
id:"10item",
nam:2000,

},
{i:11,
id:"11item",
nam:3000,
btnshow:false

}
]
const[err,setErr]=React.useState(err1);

const[cart,setCart]=React.useState([]);

const[aam,setAam]=React.useState(0);


const addto=(product)=>{

	console.log("myyy",cart)
setCart([...cart,{...product}])

}

const delto=(product)=>{

let r=cart.filter((r1)=>
 r1!==product);
setCart(r)

}
const[tr,setTr]=React.useState(true);


const[fakestore,setFakestore]=React.useState([]);
const[filt,setFilt]=React.useState(2);


console.log(fakestore)

React.useEffect(()=>{


gg();


},[])


const  gg=async()=>{

const res = await fetch('https://fakestoreapi.com/products/');
const jsdat=await res.json();
            setFakestore(jsdat)//setFakestore(jso.data)
          
            	

}


const catt=(fil)=>{

const updatedcat=fakestore.filter((fa)=>{
return fa.category===fil;


})
setFakestore(updatedcat);
}
{/*my redux*/}


const[mystate,setMystate]=React.useState('');

const[chee,setChee]=React.useState(false);
const dispatch=useDispatch();
const list=useSelector((staaa)=>staaa.changeTheNumber.list)


 const[totalpro,setTotalpro]=React.useState(0);
{/*my redux*/}
const[stocks,setStocks]=React.useState(err1)


const[checking,setChecking]=React.useState(false)
let delsto=(pro)=>{


setStocks(stocks.filter(iio=>iio.i!==pro.i))
}

const shobbtns=(yy)=>{

let vv=stocks.findIndex(iio=>iio.i==yy.i)

stocks[vv].btnshow=true;


}


const hidebbtns=(yy)=>{

let vv=stocks.findIndex(iio=>iio.i==yy.i)

stocks[vv].btnshow=false;


}
let Stock=()=>{return(

	<>
{stocks.map((ww,iddd)=>{
return(
	<>
<div style={{height:"50px",width:"100%",border:"2px solid red"}}>

<NavLink to={`/stockdata/${iddd}`}>vv</NavLink>
<p>{ww.id}</p>
<div  className="d-flex justify-content-end" style={{}}onMouseEnter={()=>{shobbtns(ww)}} onMouseLeave={()=>{hidebbtns(ww)}}>
44
{ww.btnshow?<>

	<button style={{marginBottom:"4px"}} onClick={()=>{
delsto(ww)

}}>buy</button>

<button style={{marginBottom:"4px"}} onClick={()=>{
delsto(ww)

}}>sell</button>
<button style={{marginBottom:"4px"}} onClick={()=>{
delsto(ww)

}}>5</button>
<button style={{marginBottom:"4px"}} onClick={()=>{
delsto(ww)

}}>hfhffh</button></>:""}

</div>
</div>
</>
	)


})}

</>
);

}



  return (
    <div className="App">




<Routes>

<Route path='/' element={<><p>fgff</p></>} />

<Route path='/cartss/:idd' element={<><Cartss setTotalpro={setTotalpro} totalpro={totalpro} mal={mal}/></>} />


<Route path='/carts' element={<><Carts setTotalpro={setTotalpro} totalpro={totalpro} mal={mal}/></>} />


</Routes>
<Link to='/carts'>cART</Link>





{/*stockmarket niravmehta*/}
<div  className="row">
<div className="col-4" style={{border:"2px solid red",scrollbarWidth:"thin",height:"500px",overflowX:"hidden",overflowY:"auto"}}>


<Routes>

<Route path='/' element={<Stock/>}/>



<Route path='/stockdata/:iddd' element={<><Stockdata/></>} />


<Route path='/carts' element={<><Carts setTotalpro={setTotalpro} totalpro={totalpro} mal={mal}/></>} />


</Routes>



</div>

<div  className="col-8"style={{border:"2px solid red",height:"500px"}}>

hhh
</div>


</div>
{/*stockmarket niravmehta*/}


{/*
<p style={{display:tr?'':'none'}}>loding</p>



<h1 onClick={()=>{
catt("jewelery")


}}>
my redux

</h1>


<input type="text" value={mystate} onChange={(r)=>{

setMystate(r.target.value)
}}/>

<button onClick={()=>

dispatch(addtodo(mystate))

}>  +</button>

{list.map((elem)=>{

return(
<>
<p key={elem.id}>  {elem.data}</p>

<button  onClick={()=>{
dispatch(deletetodo(elem.id))

}}>del</button>


<button onClick={()=>{

dispatch(updatetodo(mystate))
setChee(!chee)
}}>  upda</button>
</>
)

})}



my redux 


<br/>
<br/>
<ApnaCart/>




<br/>
<br/>
<br/>

<Nav  carttotal={carttotal} />






my created products

<div  style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
{

mal.map((saman,i)=>{
return(
<>


<div  style={{height:"200px",textAlign:"center",width:"200px",border:"2px solid red"}}>
<p>{saman.name}</p>
<p>${saman.price}</p>
<button onClick={()=>{

sendmal(saman);

}}>add to cart</button>
</div>


</>
	)


}
)

}

</div>

my created products

<br/>

<Routes>
<Route path='/cartss' element={<><Cartss aam={aam} delto={delto} setAam={setAam}  cart={cart}/></>} />


<Route path='/carts' element={<><Carts carttotal={carttotal} setCarttotal={setCarttotal} setSelectedmal={setSelectedmal} selectedmal={selectedmal}/></>} />


</Routes>
<Link to='/cartss'>cART</Link>




  <button onClick={()=>{
setInd(ind+1)
}}>+</button>
<button  onClick={()=>{

	
}}>-</button>




<h1 ref={re}>hhh</h1>
<p>mmmmmmm</p>
<button onClick={()=>{

 
}}>+</button>
<button  onClick={()=>{

 
}}>-</button>






<br/>
{arr.map((l,ii)=>{

return(

<>

{l.id}



<button  onClick={(idd)=>{

setArr(arr.filter((u)=>{

return u.id!==ii;

}));
console.log(ii,arr)
}

}>dele</button>
</>

)


})}



<br/>
<br/>
<br/>
<br/>

<p> add to cart system </p>
{err.map((l1,ii1)=>{

return(

<>

{l1.id}
<br/>


<button  onClick={()=>{

addto(l1)

setAam(l1.nam+aam)

}}  key={ii1}>add to cart</button><br/>
</>

)


})}

{aam}


<p> Inside cart system </p>
{cart.map((l1,ii1)=>{

return(

<>

{l1.id}
<br/>


<button  onClick={()=>{
setAam(aam-l1.nam)
delto(l1)
}}  key={ii1}>add to cart</button><br/>
</>

)


})}







*/}




</div>



  );
}

export default App;
