import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Product/Product'
import { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const result = await fetch("https://sheet.best/api/sheets/fe0afca3-c498-4299-90bd-3f4c222b48b5")
        const resultJSON = await result.json()
        setData(resultJSON)
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <h2 className='py-3 text-center'>Nuestros productos</h2>
            {
                data.length > 0 ? (
                    <div className="container">
                        <div className="row row-cols-auto justify-content-center">
                            {data.map((product, index) => (
                                <div className="col" key={index}>
                                    <Product name={product.name} brand={product.brand} description={product.description} image={product.image}/>
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

export default Products