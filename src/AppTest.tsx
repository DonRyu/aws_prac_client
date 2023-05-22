import React, { useCallback, useEffect, useState } from "react";
import useInput from "./useInput";

const alertMsg = (value: any) => {
  alert(value);
  return;
};

const AppTest = () => {
const [count, setCount] = useState(1)


console.log('count',count)
  

  return (
    <div>

      <h1>AppTest</h1>

     <button onClick={()=>setCount(count+3)}>
      asd
     </button>
    </div>
  );
};

export default AppTest;


