import { useState } from "react";

const useInput = (initalValue?: any) => {
  const [value, setValue] = useState<any>(initalValue);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};

export default useInput