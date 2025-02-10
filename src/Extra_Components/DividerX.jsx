import { useState } from "react";

function DividerX(){
    const [newTheme, setNewTheme] = useState(false);

    function changeTheme(){
      setNewTheme(newTheme ? false : true);
      console.log(newTheme);
    }
  
    return(
        <section className=" min-w-full min-h-[5vh]"></section>
    );
}

export default DividerX

