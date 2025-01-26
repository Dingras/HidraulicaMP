import './Footer.css'
import dataContact from '../../services/Data/Contacts.json'
import Signature from '../Signature/Signature'

const Footer = () => {
    return (
        <>
        <div className='container text-center footer-container'>
            <div className='row py-2'>
                <div className='my-4 col-md-12 col-lg-4 text-center align-self-center'>
                    <iframe
                        className='map-container'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.1903990699075!2d-59.82365021723692!3d-37.67089858743274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95917d00141da127%3A0x6d485488f1b1adb0!2sHidr%C3%A1ulica%20Manuel%20Pereyra!5e1!3m2!1ses-419!2sar!4v1724191124973!5m2!1ses-419!2sar"
                        width="90%"
                        height="250vw"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="my-4 col-md-12 col-lg-4 text-center align-self-center">
                    <h3>Dirección</h3>
                    <p>Av. Humaita y Juan Jose Hernandez</p>
                    <p>Benito Juárez</p>
                    <p>Buenos Aires, Argentina</p>
                </div>
                <div className='my-4 col-md-12 col-lg-4 text-center align-self-center'>
                    <h3>Contactos</h3>
                    <p>Telefonos:</p>
                    <p>+54 2281 55 3881</p>
                    <p>+54 260 411 0144</p>
                    <div className="btn-group" role="group">
                        {dataContact.map(contact => (
                            <a
                            key={contact.id}
                            href={contact.url}
                            target='_blank'
                            rel="noopener noreferrer"
                            className={`btn btn-lg btn-primary bi ${contact.icon}`}
                            >
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Signature/>
        </>
    )
}

export default Footer
