import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='my-4 py-4 w-100 bg-dark'>
            <div className='text-center text-light'>
                <h1>¿Queres comunicarte con nosotros?</h1>
                <p className='w-75 mx-auto'>
                    Llamanos o escribinos, y te ayudaremos a resolver cualquier inquietud.
                </p>
                <a href='/contactos' className='btn btn-primary'>Comunicate con nosotros..</a>
            </div>
        </div>
    )
}

export default ContactUs