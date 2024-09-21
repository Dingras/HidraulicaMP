import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Category from '../../components/Category/Category'
import HydraulicPistonLoader from '../../components/HydraulicPistonLoader/HydraulicPistonLoader';
import { useState, useEffect } from 'react'

const Categories = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchApiData = async () => {
        try {
            const response = await fetch('https://api.hidraulicamp.com.ar/api/categories/');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }    

    useEffect(() => {
        fetchApiData();
    }, []);

    return (
        <>
            <Header />
            <h2 className='py-3 text-center'>Nuestros productos</h2>
            {
                loading ? (
                    <HydraulicPistonLoader />
                ) : data.length > 0 ? (
                    <div className="container">
                        <div className="row row-cols-auto justify-content-center">
                            {data.map((category, index) => (
                                <div className="col" key={index}>
                                    <Category id_category={category.id} name={category.name} image={category.url_img}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-warning m-5" role="alert">
                        No hay productos cargados actualmente.
                    </div>
                )
            }
            <Footer/>
        </>
    )
}

export default Categories