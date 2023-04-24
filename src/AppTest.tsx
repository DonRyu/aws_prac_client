import React, { useCallback, useEffect, useState } from "react";
import useInput from "./useInput";

const alertMsg = (value: any) => {
  alert(value);
  return;
};

const AppTest = () => {
  const [value, setValue, submit] = useInput("sibar", alertMsg);

  return (
    <div>
      <h1>AppTest</h1>
      <input value={value} onChange={setValue} />
      <button onClick={submit}>Ok</button>
      {value}
    </div>
  );
};

export default AppTest;
