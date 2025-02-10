import Header from './Sections/Header.jsx';
import Stack from './Sections/Stack.jsx';
import Projects from './Sections/Work.jsx';
import Navigations from './Sections/Navigation.jsx';
import Contacts from './Sections/Contact.jsx';
import Paralax from './Sections/Parallax.jsx';
import DividerX from './Extra_Components/DividerX.jsx';

function App() {
  
  return (
    <div className="overflow-hidden w-full relative flex md:flex-row md:justify-between md:items-start flex-col justify-start items-start">
      {/* 1st column */}
      <div className="md:w-[25%] w-[0%] h-[0] md:sticky md:top-0">
        <Navigations/>
      </div>
      {/* 2nd column */}
      <div className="md:w-[50%] w-[100%] ">
        <Header/>
        <DividerX/>
        <Stack/>
        <DividerX/>
        <Projects/>
        <DividerX/>
        <Contacts/>
      </div>
      {/* 3rd column */}
      <div className="md:w-[25%] w-[0%]">
      </div>
      
        <span id='noiseBg'></span>
    </div>
  );
  
  const projectSection = document.getElementById('contact-section');
}

export default App;

