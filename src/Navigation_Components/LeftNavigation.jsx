import { useEffect, useRef, useState } from 'react';
import ProfilePic from '../assets/test1.png';
import IconReact from '../assets/icon-react.svg';
import IconExplore from '../assets/icon-explore.png';
import IconStack from '../assets/icon-stack.png';
import IconProject from '../assets/icon-project.png';
import IconContact from '../assets/icon-contact.png';


function LeftNavigation(){
    

    return(
        <div id='left-nav' className='flex flex-col w-full h-full justify-center items-center'>
           <div className="overflow-hidden flex flex-col h-max w-full justify-start gap-8 items-start p-10 text-neutral-300">
                <div 
                    onClick={() => window.location.hash = '#welcome-section'} 
                    className='cursor-pointer group md:w-full w-max md:visible hidden md:flex flex-row justify-between items-start'>
                    <img className='group-hover:grayscale-0 grayscale h-20' src={ProfilePic} alt="" />
                    <div className='md:h-full md:w-full w-max px-4 flex flex-col justify-center items-start'>
                        <p className=' text-neutral-200 font-bold text-sm'>Denfer Jericho Abad</p>
                        <p className=' text-neutral-400 font-light text-xs'>Experience 404 Error</p>
                    </div>
                </div>
                {/* nav buttons */}
                    <div className='overflow-hidden text-neutral-300 font-normal text-xs px-4 py-4 w-full h-full flex flex-col justify-start items-center gap-2' >
                    
                    <div 
                    onClick={() => window.location.hash = '#welcome-section'} 
                    className='cursor-pointer group hover:opacity-100 hover:translate-x-10 opacity-70 hover:scale-110 duration-300 py-2 w-full flex flex-row justify-start items-center  gap-4'>
                        <img className='group-hover:animate-spin duration-300 h-6' src={IconExplore} alt="" />
                        <p className=''>About</p>
                    </div>
                    <div 
                    onClick={() => window.location.hash = '#tool-section'}
                    className='cursor-pointer group hover:opacity-100 hover:translate-x-10 opacity-70 hover:scale-110 duration-300 py-2 w-full flex flex-row justify-start items-center  gap-4'>
                        <img className='group-hover:animate-spin duration-300 h-6' src={IconStack} alt="" />
                        <p className=''>Stack</p>
                    </div>
                    <div
                    onClick={() => window.location.hash = '#project-section'}
                    className='cursor-pointer group hover:opacity-100 hover:translate-x-10 opacity-70 hover:scale-110 duration-300 py-2 w-full flex flex-row justify-start items-center  gap-4'>
                        <img className='group-hover:animate-spin duration-300 h-6' src={IconProject} alt="" />
                        <p className=''>Project</p>
                    </div>
                    <div
                    onClick={() => window.location.hash = '#contact-section'} 
                    className='cursor-pointer group hover:opacity-100 hover:translate-x-10 opacity-70 hover:scale-110 duration-300 py-2 w-full flex flex-row justify-start items-center  gap-4'>
                        <img className='group-hover:animate-spin duration-300 h-6' src={IconContact} alt="" />
                        <p className=''>Contact</p>
                    </div>
                    
                </div>
           </div>
        </div>
    );
}

export default LeftNavigation