import './AboutMe.css'

const AboutMe = () => {
    return (
        <>
            <h2 className='title-aboutme'>Quienes somos?</h2>
            <div className="card text-bg-dark mx-2 aboutme-container">
                <img src="/Nosotros.jpeg" className="card-img img-vid-container" alt="..."/>
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <h4 className="card-title aboutme-text text-center w-75">
                        Soy Manuel Pereyra, me dedico hace mas de 20 años a la herreria de maquinaria pesada, camiones, gruas y mucho mas.
                    </h4>
                </div>
            </div>
            <div className="card text-bg-dark mx-2 aboutme-container">
                <img src="/Torneria.png" className="card-img img-vid-container" alt="..."/>
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <h4 className="card-title aboutme-text text-center w-75">
                        En mis años de trabajo no solo me dedique a la herreria, tambien realizo trabajos de torneria desde hace mucho tiempo.
                    </h4>
                </div>
            </div>
            <div className="card text-bg-dark mx-2 aboutme-container">
                <img src="/Welcome.jpeg" className="card-img img-vid-container" alt="..."/>
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <h4 className="card-title aboutme-text text-center w-75">
                        Por mi trabajo, siempre tuve que enfrentarme a trabajos en hidraulica, y decidi abrir mi propio local no solo para ofrecer un servicio,
                        sino tambien para ofrecer productos de calidad y brindar la mejor atencion gracias a todos mis años de experiencia en el rubro.
                    </h4>
                </div>
            </div>
            <div className="card text-bg-dark mx-2 aboutme-container">
                <img src="/Bienvenida.jpg" className="card-img img-vid-container" alt="..."/>
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <h4 className="card-title aboutme-text text-center w-75">
                    Esto no es todo, tambien realizamos trabajos de plegado y corte en metales con pantografo CNC.
                    </h4>
                </div>
            </div>
        </>
    )
}

export default AboutMe