import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import {GET} from '../../services/js/httpr.js'

const Services = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await GET('/'); // Asegúrate de pasar el endpoint correcto
            setData(result);
        };
        //fetchData();
    }, []);

    return (
        <>
            <Header />
                {
                data.length > 0 ? (
                    data.map((service, index) => (
                        <></>
                        //<Service key={index} name={service.name} />
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