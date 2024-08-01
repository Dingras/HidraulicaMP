import './WhoWeAre.css'

const WhoWeAre = () => {
    return (
        <div className='py-4 w-100 bg-dark'>
            <div className='text-center text-light'>
                <h1>¿Quienes somos?</h1>
                <p className='w-75 mx-auto'>
                    Somos una empresa familiar que se dedica a la mecánica con una trayectoria más de 20 años en el mercado.
                    Una empresa dedicada a proporcionar soluciones de maquinaria agricola, camiones, acoplados, motoniveladoras,
                    palas mecánicas, servicios y venta de hidráulica, tornería, corte de plasma con pantógrafo CNC, plegado, y mucho más.
                    Soluciones de alta calidad para una variedad de industrias
                </p>
                <a href='/nosotros' className='btn btn-primary'>Conoce mas ...</a>
            </div>
        </div>
    )
}

export default WhoWeAre