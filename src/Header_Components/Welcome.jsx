import React from 'react';
import { saveAs } from 'file-saver';  
import DownloadImg from '../assets/icon-download.png';
import IconLocation from '../assets/icon-location.png';
import IconExperience from '../assets/icon-experience.png';
import PdfCV from '../assets/AbadDenferJerichoResume.pdf';

function Welcome() {
  const downloadLocalPDF = () => {
    saveAs(PdfCV, 'AbadDenferJerichoResume.pdf');
  };

  return (
    <div id='welcome-section' className="min-h-[50vh] w-full flex flex-col justify-around items-start">
      <div className="text-neutral-200 px-8 w-full h-full flex flex-col justify-center items-start space-y-3">
        <pre className="animate-left-to-right md:text-3xl text-base font-semibold my-1 leading-tight">
          Hey, I'm <span id=''> Denfer Jericho Abad</span>, <br />
          Front-End Developer
        </pre>
        <pre className="animate-up md:text-base text-xs text-neutral-400 font-light md:leading-6">
          College BSIT Student. <br />
          Creating Simple & Innovative Websites.
        </pre>
         {/* <div className="flex flex-row justify-start items-center gap-2 animate-up md:text-xs text-xs text-neutral-500 font-extralight md:leading-0">
               <img className='h-2' src={IconLocation} alt="" />
               Camarines Norte, Bicol Region, Philippines.
            </div>
            <div className="flex flex-row justify-start items-center gap-2 animate-up md:text-xs text-xs text-neutral-500 font-extralight md:leading-0">
               <img className='h-2' src={IconExperience} alt="" />
               Experience 404 Error.
            </div> */}
      </div>
      
      <div className="animate-show overflow-hidden flex flex-row justify-start items-center px-8 gap-8">
      
        <button onClick={() => window.location.hash = '#contact-section'} 
        className="bg-neutral-900 border border-neutral-800 drop-shadow-sm hover:bg-neutral-700 ease-in-out duration-300 hover:animate-none animate-pulse text-neutral-200 md:text-xs text-[10px] md:w-[120px] w-max font-semibold px-4 py-2 rounded-md ">
          Contact
        </button>
        <button onClick={downloadLocalPDF}
          className="flex flex-row justify-around items-center bg-neutral-900 border border-neutral-800 drop-shadow-sm hover:bg-neutral-700 ease-in-out duration-300 hover:animate-none animate-pulse delay-100 text-neutral-200 md:text-xs text-[10px] md:w-[120px] w-max gap-2 font-semibold px-4 py-2 rounded-md ">
          <img className='h-4 animate-bounce' src={DownloadImg} alt="" />
          CV
        </button>
      </div>
    </div>
  );
}

export default Welcome;
