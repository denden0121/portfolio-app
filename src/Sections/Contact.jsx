import Contacts from '../Contact_Components/Contacts.jsx';

function Contact(){

    return(
        <section className="flex md:h-[60vh] w-full h-max md:flex-col md:justify-center md:items-start flex-row ">
            <Contacts/>
        </section>
    );
}

export default Contact