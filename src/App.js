import { useState } from "react";


function App() {
  const [count,setCount]= useState(0);
 
//Destructing...

function addToCart() {
 
  setCount(count +1);
  
}
function removefromcart() {
 
  setCount(count -1);
  
}
if(count<0)
{
  setCount(0);
}
return (
  <div>
      <h1>{count}</h1>
     
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={removefromcart}>Remove from Cart</button>
  </div>
  //document.getElementById("root")
);

}

export default App;