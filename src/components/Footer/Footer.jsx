import './Footer.css'

const Footer = () => {
    return (
        <div className='container text-center'>
            <div className='row py-4'>
                <div className='col-12 col-md-4 text-center align-self-center'>
                    <h3>Horarios</h3>
                    <p>Lunes a Viernes 8 a 18hs.</p>
                    <p>Sabados 8 a 13hs.</p>
                </div>
                <div className='col-12 col-md-4 text-center align-self-center'>
                    <h3>Direccion</h3>
                    <p>Av. Humaita y Juan Jose Hernandez</p>
                    <p>Benito Juarez</p>
                    <p>Buenos Aires, Argentina</p>
                </div>
                <div className='col-12 col-md-4 text-center align-self-center'>
                    <h3>Contactos</h3>
                    <p>Telefonos:</p>
                    <p>+54 2281 55 3881</p>
                    <p>+54 260 411 0144</p>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <a href='https://w.app/hidraulicamp' target='_blank' type="button" className="btn btn-lg btn-primary bi bi-whatsapp"></a>
                        <a href='https://www.instagram.com/hidraulicamanuelpereyra' target='_blank' type="button" className="btn btn-lg btn-primary bi bi-instagram"></a>
                        <a href='https://www.facebook.com/profile.php?id=100068467522498' target='_blank' type="button" className="btn btn-lg btn-primary bi bi-facebook"></a>
                        <a href='' type="button" target='_blank' className="btn btn-lg btn-primary bi bi-envelope-at-fill"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer