import { useState } from "react";

function Dynamic(){
    
    const colors = ["red", "blue"];
    const [color, setColor] = useState("red");
    const colorCss = ["bg-red-500", "bg-blue-500"];
    
    return(
        <div className="bg-gray-950 h-[100vh] flex justify-center items-center">
            <select className={colorCss}
                    value={color}
                    onChange={(event) => {
                        setColor(event.target.value);
                    }}>
            <option value="">Select</option>
                    {
                        colors.map((color) => {
                            return <option value={color}>{color}</option>;
                        })
                    }
            </select>
        </div>
    );
}

export default Dynamic