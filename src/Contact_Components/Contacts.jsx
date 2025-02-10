import { useEffect, useRef, useState } from 'react';
import React from 'react';
import IconDiscord from '../assets/icon-discord.png';
import IconGmail from '../assets/icon-gmail.png';
import IconGithub from '../assets/icon-github.png';
import IconPhone from '../assets/icon-contact.png';
import NightGif from '../assets/zoom.gif';

function Contacts(){

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "39087d5a-6f6c-4ab9-a72f-6571e3d1f700");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Declare a state for the text to copy
  const [textToCopy, setTextToCopy] = useState("09915650977"); // Default phone number

  // Copy function using the Clipboard API (modern and cleaner)
  const copyText = async () => {
    try {
      // Using the Clipboard API to copy the text
      await navigator.clipboard.writeText(textToCopy);
      alert(`Nice, you got my number`);
    } catch (err) {
    }
  };

    return(
    <div id='contact-section' className="animate-left-to-right flex h-full md:w-full w-screen flex-col justify-start items-start">
        <div className=" text-neutral-200 px-8 flex flex-col w-full justify-center items-start">
            <pre className="md:text-2xl text-xl font-semibold my-1 leading-tight">
                Contacts
            </pre>
            <pre className="md:text-sm text-xs text-neutral-400 font-light leading-9 ">
              I usually respond within a day {':)'}
            </pre>
        </div>
        <div className=" w-full h-full  px-8 my-8 flex flex-col gap-4 justify-start cursor-pointer  overflow-hidden">
            
            <div className="group relative px-4 py-4 overflow-hidden  inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950   border-neutral-900 rounded-md md:w-full w-full md:h-[30%] h-[30%] flex md:flex-row flex-row justify-between items-start">
            {/* <div className="absolute inset-0 z-0 bg-auto bg-center opacity-20 pointer-events-none" style={{ backgroundImage: `url(${NightGif})` }} ></div> */}
            <div 
                    onClick={() => window.open('https://github.com/denden0121', '_blank')}
              className='group hover:opacity-100 hover:scale-110 duration-300 opacity-60 py-4 px-4 rounded-xl w-max gap-1 flex flex-col justify-start text-neutral-300 items-center'>
                <img className='md:h-8 h-6' src={IconGithub} alt="" />
                <p className='text-xs  text-neutral-100'>Github</p>
                <p className='text-[10px] hidden md:visible text-neutral-400 font-light'>denzone0121</p>
              </div> 
              <div 
                    onClick={() => window.open('mailto:denferjerichomabad@gmail.com', '_blank')}
              className='group hover:opacity-100 hover:scale-110 duration-300 opacity-60 py-4 px-4 rounded-xl w-max gap-1 flex flex-col justify-start text-neutral-300 items-center'>
                <img className='md:h-8 h-6' src={IconGmail} alt="" />
                <p className=' text-xs text-neutral-100'>Email</p>
                <p className='text-[10px] md:visible hidden text-neutral-400 font-light'>denferjerichomabad@gmail.com</p>
              </div> 
             
            <div onClick={copyText} className="group hover:opacity-100 hover:scale-110 duration-300 opacity-60 py-4 px-4 rounded-xl w-max gap-1 flex flex-col justify-start text-neutral-300 items-center">
              <img className="md:h-8 h-6" src={IconPhone} alt="Phone Icon" />
              <p className="text-xs text-neutral-100">Mobile</p>
              <p className="text-[10px] md:visible hidden text-neutral-400 font-light">{textToCopy}</p>
            </div>
             
            </div>
            <div className='w-full h-max relative px-4 py-4 border border-neutral-900 rounded-md '>
                <div className="absolute inset-0 z-0 bg-auto bg-center opacity-20 pointer-events-none" style={{ backgroundImage: `url(${NightGif})` }} ></div>
            <form className='flex flex-col justify-center  gap-4' onSubmit={onSubmit}>
                  <input className='py-2 px-4 text-xs text-neutral-200 bg-neutral-900 rounded-md' type="text" placeholder='Name' name="name" required/>
                  <input className='py-2 px-4 text-xs text-neutral-200 bg-neutral-900 rounded-md' placeholder='Email' type="email" name="email" required/>
                  <textarea className='py-2 px-4 text-xs text-neutral-200 bg-neutral-900 rounded-md' placeholder="Message" name="message" required></textarea>

                  <button className='text-neutral-100 hover:animate-none animate-pulse duration-300 bg-neutral-800 border border-neutral-700  text-sm px-4 py-3 rounded-md' type="submit">Send Message</button>

                </form>
          </div>
        </div>
        
    </div>
    
    );
}

export default Contacts