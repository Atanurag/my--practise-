import React from 'react';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
 
const Nav = ({carttotal}) => {
  return (
    <div style={{height:"33px",width:"100%",textAlign:"right",backgroundColor:"yellow"}}>

<BrowserRouter>
<Link exact to="/carts">
<p>{carttotal}</p>
</Link>
</BrowserRouter>
    </div>
  )
}

export default Nav;