import './HydraulicPistonLoader.css'; // Importa el archivo de estilos CSS

const HydraulicPistonLoader = () => {
    return (
        <div className="image-loader">
            <img src="Loader/icono-cilindro-hidraulico-1.png" alt="loader-frame-1" className="loader-image frame-1" />
            <img src="Loader/icono-cilindro-hidraulico-2.png" alt="loader-frame-2" className="loader-image frame-2" />
            <img src="Loader/icono-cilindro-hidraulico-3.png" alt="loader-frame-3" className="loader-image frame-3" />
            <div className="loading-text">Cargando...</div>
        </div>
    )
}

export default HydraulicPistonLoader;
