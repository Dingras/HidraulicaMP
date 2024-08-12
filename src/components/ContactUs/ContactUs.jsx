import './ContactUs.css'
import dataRoutes from '../../services/Data/Routes.json'
import data from '../../services/Data/Home.json'

const ContactUs = () => {
    return (
        <div className='my-4 py-4 w-100 bg-dark'>
            <div className='text-center text-light'>
                <h1>{data.contact_us.title}</h1>
                <p className='w-75 mx-auto'>
                    {data.contact_us.description}
                </p>
                <a href={dataRoutes.contacts.link} className='btn btn-primary'>{data.contact_us.button_text}</a>
            </div>
        </div>
    )
}

export default ContactUs