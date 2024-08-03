import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'

const Contacts = () => {
    return (
        <>
            <Header />
            <h2 className='text-center'>Contactate con nosotros</h2>
            <p className='text-center'>
                Mediante cualquiera de nuestras vias de comunicacion.
            </p>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Contacts