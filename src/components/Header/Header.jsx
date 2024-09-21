import './Header.css'
import dataRoutes from '../../services/Data/Routes.json'
import Logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand p-0 m-0" href="/">
                    <img src={Logo} alt="HidraulicaMP" className="d-inline-block align-text-top" style={{maxHeight:'70px'}}/>
                </a>
                <h1 className='hidraulicamp'>Hidraulica MP</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href={dataRoutes.products.link}>{dataRoutes.products.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={dataRoutes.services.link}>{dataRoutes.services.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={dataRoutes.us.link}>{dataRoutes.us.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={dataRoutes.contacts.link}>{dataRoutes.contacts.title}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header