import IconReact from '../assets/icon-react.svg';
import IconTailwind from '../assets/icon-tailwind.svg';
import IconHtml from '../assets/icon-html-2.png';
import IconCss from '../assets/icon-css.png';
import IconJs from '../assets/icon-js.png';
import IconPhp from '../assets/icon-php.png';
import IconLaravel from '../assets/icon-wordpress.png';
import IconMySql from '../assets/icon-mysql.png';
import StarsGif from '../assets/zoom.gif';
import { useState } from 'react';

function Tools(){
    const [reactTxtT, setReactT] = useState('React');
    const [reactTxtD, setReactD] = useState('UI Library');
    const [tailwindTxtT, setTailwindT] = useState('Tailwind');
    const [tailwindTxtD, setTailwindD] = useState('Utility-First CSS Framework');
    const [HtmlTxtT, setHtmlT] = useState('HTML');
    const [HtmlTxtD, setHtmlD] = useState('Markup Language for Web');
    const [CssTxtT, setCssT] = useState('CSS');
    const [CssTxtD, setCssD] = useState('Style Sheets for Web');
    const [JsTxtT, setJsT] = useState('Javascript');
    const [JsTxtD, setJsD] = useState('Programming Language for Web');
    const [PhpTxtT, setPhpT] = useState('PHP');
    const [PhpTxtD, setPhpD] = useState('Server-Side Scripting Language');
    const [LaravelTxtT, setLaravelT] = useState('Wordpress');
    const [LaravelTxtD, setLaravelD] = useState('Content Management System');
    const [MysqlTxtT, setMysqlT] = useState('MySQL');
    const [MysqlTxtD, setMysqlD] = useState('Database Management System');

    // mouse on
    const mouseHoverOnHtml = () => {
        setHtmlT('Project: CS & A');
        setHtmlD('Schedule, Appointment System with Activities Manager and Messaging.');
      };
      
      const mouseHoverOnCss = () => {
        setCssT('Project: CS & A');
        setCssD('Schedule, Appointment System with Activities Manager and Messaging.');
      };
      
      const mouseHoverOnPhp = () => {
        setPhpT('Project: CS & A');
        setPhpD('Schedule, Appointment System with Activities Manager and Messaging.');
      };
      
      const mouseHoverOnMysql = () => {
        setMysqlT('Project: CS & A');
        setMysqlD('Schedule, Appointment System with Activities Manager and Messaging.');
      };
      
      const mouseHoverOnJs = () => {
        setJsT('Project: CS & A');
        setJsD('Schedule, Appointment System with Activities Manager and Messaging.');
      };
      
      const mouseHoverOnReact = () => {
        setReactT('Project: Portfolio');
        setReactD('Demonstrate projects & skills.');
      };
      
      const mouseHoverOnTailwind = () => {
        setTailwindT('Project: Portfolio');
        setTailwindD('Express Projects & skills.');
      };

      const mouseHoverOnLaravel = () => {
        setLaravelT('Project: Portfolio');
        setLaravelD('Express Projects & skills.');
      };
      
    //   mouse off
      const mouseHoverOffHtml = () => {
        setHtmlT('HTML');
        setHtmlD('Markup Language for Web');
      };
      
      const mouseHoverOffCss = () => {
        setCssT('CSS');
        setCssD('Style Sheets for Web');
      };
      
      const mouseHoverOffPhp = () => {
        setPhpT('PHP');
        setPhpD('Server-Side Scripting Language');
      };
      
      const mouseHoverOffMysql = () => {
        setMysqlT('MySQL');
        setMysqlD('Database Management System');
      };

      const mouseHoverOffJs = () => {
            setJsT('Javascript');
            setJsD('Programming Language for Web');
      };
      
      const mouseHoverOffReact = () => {
        setReactT('React');
        setReactD('UI Library');
      };
      
      const mouseHoverOffTailwind = () => {
        setTailwindT('Tailwind');
        setTailwindD('Utility-First CSS Framework');
      };

      const mouseHoverOffLaravel = () => {
            setLaravelT('Wordpress');
            setLaravelD('Content Management System');
      };
      
    return(
    <div id='tool-section' className=" min-h-[50vh] min-w-full flex flex-col justify-around items-start">
        <div className=" animate-down text-neutral-200 px-8 flex flex-col justify-center items-start ">
            <pre className="text-xl font-semibold my-1 leading-tight ">
                Stack
            </pre>
            <pre className="text-xs text-neutral-400 font-light leading-9">
                Language, Tools, Software I use.
            </pre>
        </div>
        <div  className="overflow-hidden h-max w-full  px-8 my-8 flex ">
                <div  className='z-1 relative animate-show delay-500 inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 border border-neutral-900 rounded-md w-full min-h-full p-8 grid md:grid-cols-2 grid-cols-1'>
                {/* Stars Background */}
                <div className="z-10 absolute inset-0 bg-auto bg-center opacity-15 pointer-events-none" 
                style={{ backgroundImage: `url(${StarsGif})` }} ></div>

                {/*  Icon */}
                {/* <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnReact}
                onMouseOut={mouseHoverOffReact}
                className="cursor-pointer hover:-translate-y-2 relative group opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconReact} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{reactTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{reactTxtD}</p>
                    </div>
                </div> */}
                {/*  Icon */}
                <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnHtml}
                onMouseOut={mouseHoverOffHtml}
                className="cursor-pointer relative group opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconHtml} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{HtmlTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{HtmlTxtD}</p>
                    </div>
                </div>
                {/*  Icon */}
                <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnCss}
                onMouseOut={mouseHoverOffCss}
                className="cursor-pointer relative group opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconCss} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{CssTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{CssTxtD}</p>
                    </div>
                </div>
                {/*  Icon */}
                <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnTailwind}
                onMouseOut={mouseHoverOffTailwind}
                className="cursor-pointer relative group hover:-translate-y-2 opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconTailwind} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{tailwindTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{tailwindTxtD}</p>
                    </div>
                </div>
                {/*  Icon */}
                <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnJs}
                onMouseOut={mouseHoverOffJs}
                className="cursor-pointer relative group opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconJs} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{JsTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{JsTxtD}</p>
                    </div>
                </div>
                {/*  Icon */}
                <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnMysql}
                onMouseOut={mouseHoverOffMysql}
                className="cursor-pointer relative group opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconMySql} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{MysqlTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{MysqlTxtD}</p>
                    </div>
                </div>
                {/*  Icon */}
                <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnPhp}
                onMouseOut={mouseHoverOffPhp}
                className="cursor-pointer hover:translate-y-2 relative group opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconPhp} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{PhpTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{PhpTxtD}</p>
                    </div>
                </div>
                {/*  Icon */}
                <div  
                id='span-leftToRight'
                onMouseOver={mouseHoverOnLaravel}
                onMouseOut={mouseHoverOffLaravel}
                className="cursor-pointer relative group hover:translate-y-2 opacity-70 hover:opacity-100 hover:translate-x-10 animate-left-to-right text-neutral-200  hover:scale-110 hover:drop-shadow-xs  border border-transparent ease-in-out duration-300 px-2 py-2 rounded-md w-[80%] h-max flex flex-row justify-start items-center gap-8">
                    <img className='h-12 p-2 opacity-85  group-hover:animate-left-to-right  duration-300 group-hover:bg-inherit group-hover:opacity-100   rounded-lg' src={IconLaravel} alt="React Logo" />
                    <div  className=' group-hover:text-neutral-100 text-neutral-200  h-full w-full'>
                        <p className='text-xs font-semibold'>{LaravelTxtT}</p>
                        <p className='text-[10px] font-light text-neutral-400'>{LaravelTxtD}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    );
}

export default Tools