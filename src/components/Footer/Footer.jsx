import './Footer.css'
import dataContact from '../../services/Data/Contacts.json'

const Footer = () => {
    return (
        <div className='container text-center'>
            <div className='row py-4'>
                <div className='col-12 col-md-4 text-center align-self-center'>
                    <h3>Horarios</h3>
                    <p>Lunes a Viernes 8 a 18hs.</p>
                    <p>Sabados 8 a 13hs.</p>
                </div>
                <div className="col-12 col-md-4 text-center align-self-center">
                    <h3>Dirección</h3>
                    <iframe
                        className='map-container'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d563.4689247889858!2d-59.822500802226514!3d-37.67106078264774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1722913347951!5m2!1ses-419!2sar"
                        width="300"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p>Av. Humaita y Juan Jose Hernandez</p>
                    <p>Benito Juárez</p>
                    <p>Buenos Aires, Argentina</p>
                </div>
                <div className='col-12 col-md-4 text-center align-self-center'>
                    <h3>Contactos</h3>
                    <p>Telefonos:</p>
                    <p>+54 2281 55 3881</p>
                    <p>+54 260 411 0144</p>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
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
    )
}

export default Footer