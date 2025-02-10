import LeftNav from '../Navigation_Components/LeftNavigation.jsx';

function Navigation(){

    return(
        <section className="flex md:h-screen w-full h-max md:flex-col md:justify-center md:items-start flex-row ">
            <LeftNav/>
        </section>
    );
}

export default Navigation