import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand p-0 m-0" href="/">
                    <img src="Logo.png" alt="HidraulicaMP" className="d-inline-block align-text-top" style={{maxHeight:'70px'}}/>
                </a>
                <h1 className='hidraulicamp'>Hidraulica MP</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contactos">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header