import { useEffect, useRef, useState } from 'react';
import React from 'react';
import CapstoneM from '../assets/c-m.png';
import CapstoneAll from '../assets/mock-all.png';
import CapstoneMVideo from '../assets/mock-test.mp4';
import CapstoneMock from '../assets/capstone-m-mock.mp4';
import IconHtml from '../assets/icon-html-2.png';
import IconCss from '../assets/icon-css.png';
import IconJs from '../assets/icon-js.png';
import IconPhp from '../assets/icon-php.png';
import IconMySql from '../assets/icon-mysql.png';
import CapstoneGif from '../assets/mock-test-unscreen.gif';
import StarsGif from '../assets/stars-gif.gif';
// import NightGif from '../assets/dark-night.gif';
import NightGif from '../assets/zoom.gif';

function Projects(){

    return(
    <div id='project-section' className="animate-left-to-right flex h-[100vh] w-full flex-col justify-start items-start">
        <div className=" text-neutral-200 px-8 flex flex-col justify-center items-start">
            <pre className="md:text-2xl text-xl font-semibold my-1 leading-tight">
                Projects
            </pre>
            <pre className="md:text-sm text-xs text-neutral-400 font-light leading-9">
                Simple Projects I Developed.
            </pre>
        </div>
        <div className=" w-full h-full px-8 my-8 flex flex-col justify-center items-center gap-4 cursor-pointer overflow-hidden ">
            
            <div className="z-10 group relative overflow-hidden border bg-neutral-950 border-neutral-900 rounded-md w-full h-full flex justify-center items-center">
              <img className='grayscale z-25 group-hover:grayscale-0 opacity-100 group-hover:opacity-100 group-hover:blur-none  group-hover:scale-150 absolute bg-cover scale-75 rotate-12 md:h-full duration-500 ease-in-out' src={CapstoneAll} alt="" />
              {/* <img className='opacity-75 group-hover:opacity-0 group-hover:animate-ping z-15 top-[10%] right-[10%] absolute bg-cover scale-125 h-[30%] duration-500 ease-in-out' src={CapstoneM} alt="" /> */}
              {/* <video className="w-full h-1/2" src={CapstoneMVideo} autoPlay muted loop type="video/mp4" /> */}
              {/* <video className="absolute z-15 opacity-100 group-hover:scale-90 group-hover:top-[0%] duration-300 bg-cover flex top-[-10%] right-[-30%] scale-[65%] h-full w-full min-h-full" src={CapstoneMock} autoPlay muted loop type="video/mp4" /> */}
            <div className="absolute inset-0  z-10 bg-auto bg-center opacity-20 pointer-events-none" style={{ backgroundImage: `url(${NightGif})` }} ></div>
              
              <div className='inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950  z-15 relative h-full w-full z-15 flex flex-col justify-end items-star p-8'>
                <p className='md:text-xl text-base text-neutral-300 font-semibold w-full md:p-2 p-0'>CS & A</p>
                <p className='md:text-xs text-[10px] text-neutral-400 font-semibold  md:p-2 p-0'> 
                    Class Schedule & Apppointment System with Activities Manager and Messaging. <br />
                </p>
                {/* <pre className='text-xs text-neutral-300 font-light p-2 '> Developed using Vanila Html, Css, Javascript, PHP and MyQL.</pre> */}
                {/* <div className='w-full h-max flex flex-row justify-start items-center gap-8 py-2'>
                    <img className=' h-12 p-2  opacity-85 group-hover:animate-none duration-75 group-hover:opacity-100  bg-neutral-800 rounded-lg' src={IconHtml} alt="HTML Logo" />
                    <img className=' h-12 p-2  opacity-85 group-hover:animate-none duration-75 group-hover:opacity-100  bg-neutral-800 rounded-lg'src={IconCss} alt="CSS Logo" />
                    <img className=' h-12 p-2  opacity-85 group-hover:animate-none duration-75 group-hover:opacity-100  bg-neutral-800 rounded-lg' src={IconJs} alt="JavaScript Logo" />
                    <img className=' h-12 p-2  opacity-85 group-hover:animate-none duration-75 group-hover:opacity-100  bg-neutral-800 rounded-lg' src={IconPhp} alt="PHP Logo" />                                                                            
                    <img className=' h-12 p-2  opacity-85 group-hover:animate-none duration-75 group-hover:opacity-100  bg-neutral-800 rounded-lg' src={IconMySql} alt="PHP Logo" />                                                                            
                </div> */}
                <div className=" z-20 animate-show flex flex-row justify-start items-center py-4 gap-8">
                    {/* <button className="bg-neutral-800 border border-neutral-700 drop-shadow-sm   hover:bg-neutral-800 ease-in-out duration-100 hover:animate-none animate-pulse text-neutral-200 text-xs w-[120px] font-semibold px-4 py-2 rounded-md ">
                        More Info
                    </button> */}
                    <button 
                    onClick={() => window.open('https://denden0121.freewebhostmost.com', '_blank')}
                    className="flex flex-row justify-center items-center group bg-neutral-800 border  border-neutral-700 drop-shadow-sm  hover:bg-neutral-800 ease-in-out duration-100 hover:animate-none animate-pulse delay-100  text-neutral-200 md:text-xs text-[10px] md:w-[120px] w-[50px] font-semibold px-4 py-2 rounded-md ">
                        View 
                    </button>
                </div>
              </div>
            </div>
        </div>
    </div>
    
    );
}

export default Projects