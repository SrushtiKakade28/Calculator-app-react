import React  from "react";
import  {add,sub, mult,div} from './Calc';
function App(){
  return(
    <>
    <ul>
    <li>the sum of two no.s is{add(40,4)}</li>
    <li>the subtraction of two no.s is{sub(40,4)}</li>
    <li>the multiplication of two no.s is{mult(40,4)}</li>
    <li>the division of two no.s is{div(40,3)}</li>

  </ul>
  </>
  );
}

export default App;
