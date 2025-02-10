import { useState } from "react";

function Parallax() {
  const [newTheme, setNewTheme] = useState(false);

  function changeTheme(){
    setNewTheme(newTheme ? false : true);
    console.log(newTheme);
  }

  return (
    <>
    <div className="flex flex-col items-center  justify-around bg-fixed bg-parallax bg-contain h-[100vh]">
          <h1 className="text-5xl text-yellow-300 uppercase">TEST PARALAX</h1>
          <button className="text-yellow-400" onClick={changeTheme}>click me</button>
    </div>
    <div className="h-[100vh]">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus reprehenderit quis laborum eligendi incidunt aspernatur sunt dolore maiores illo, laudantium expedita. Odit vel dicta aperiam cumque natus dolorum tempora aliquid?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus reprehenderit quis laborum eligendi incidunt aspernatur sunt dolore maiores illo, laudantium expedita. Odit vel dicta aperiam cumque natus dolorum tempora aliquid?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus reprehenderit quis laborum eligendi incidunt aspernatur sunt dolore maiores illo, laudantium expedita. Odit vel dicta aperiam cumque natus dolorum tempora aliquid?</p>
    </div>
      <div className="flex items-center justify-center bg-fixed bg-parallax bg-contain h-[100vh]">
            <h1 className="text-5xl text-yellow-300 uppercase">TEST PARALAX</h1>
      </div>
      <div className="min-h-screen">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus reprehenderit quis laborum eligendi incidunt aspernatur sunt dolore maiores illo, laudantium expedita. Odit vel dicta aperiam cumque natus dolorum tempora aliquid?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus reprehenderit quis laborum eligendi incidunt aspernatur sunt dolore maiores illo, laudantium expedita. Odit vel dicta aperiam cumque natus dolorum tempora aliquid?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus reprehenderit quis laborum eligendi incidunt aspernatur sunt dolore maiores illo, laudantium expedita. Odit vel dicta aperiam cumque natus dolorum tempora aliquid?</p>
      </div>
    </>
  )
}

export default Parallax