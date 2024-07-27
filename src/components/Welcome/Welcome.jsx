import './Welcome.css'

const Welcome = () => {
    return (
        <div className="container-fluid px-4">
            <img src="/Bienvenida.jpg" alt="fondo" className="img-fluid w-100" style={{ maxHeight:'500px', objectFit: 'cover' }} />
        </div>
    )
}

export default Welcome