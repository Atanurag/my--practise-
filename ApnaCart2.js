import React from 'react';

const ApnaCart2 = ({mobil,price,quantity,Remove,increment,ind,decrement}) => {
  return (
    <div>


<p>{mobil} {price}  </p>

<p>{price*quantity}
</p>
<span>
<button onClick={()=>{

	{decrement(ind)}
}}>-</button>
{quantity}
<button onClick={()=>{

	{increment(ind)}
}} >+</button>
</span>

<button onClick={()=>{{Remove(ind)}}}>Remove</button>



    </div>
  )
}

export default ApnaCart2;