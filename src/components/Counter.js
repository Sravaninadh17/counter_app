import { useState } from "react";

export default function Counter(props)  {
    const [value,setValue] = useState(0);

    const handleMinusClick = () => {
        var newValue = value - 1;
        setValue(newValue);
    };

    const handlePlusClick = () => {
        var newValue = value + 1;
        setValue(newValue);
    };
return(
<>
<h1>{props.title}</h1>
<div style={{ display: "flex"}}>
    <button className="margin-10" onClick={handleMinusClick}>-</button>
     <p className="margin-10">{value}</p>
     <button className="margin-10" onClick={handlePlusClick}>+</button>
</div>



</>
);


}