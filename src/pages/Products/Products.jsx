import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Product/Product'
import { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const result = await fetch("https://sheet.best/api/sheets/750b7424-1a8a-4fc7-811c-48fa632fbd1a")
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