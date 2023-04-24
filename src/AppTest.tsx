import React, { useCallback, useEffect, useState } from "react";
import useInput from "./useInput";

const AppTest = ()=>{

    const [value,setValue] = useInput('sibar')

    return (
        <div>
            <h1>AppTest</h1>
            <input value={value} onChange={setValue}/>
            {value}
        </div>
    )
}

export default AppTest