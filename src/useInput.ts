import { useState } from "react";

const useInput = (initalValue?: any, submit?: any) => {
  const [value, setValue] = useState<any>(initalValue);

  const handleChange = (e: any) => {
    setValue(e.target.value);
   
  };

  const handleSubmit = ()=>{
    submit(value);
  }

  return [value, handleChange,handleSubmit];
};

export default useInput;
