import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Service from '../../components/Service/Service.jsx'
import dataServices from '../../services/Data/Services.json'

const Services = () => {

    return (
        <>
            <Header />
            <h2 className='py-3 text-center'>Nuestros servicios</h2>
                {
                dataServices.length > 0 ? (
                    dataServices.map((service) => (
                        
                        <Service key={service.id} name={service.name} description={service.description} url_img={service.url_img}/>
                    ))
                ) : (
                    <div className="alert alert-warning m-5" role="alert">
                        No hay servicios cargados actualmente.
                    </div>
                )
            }
            <Footer/>
        </>
    )
}

export default Services