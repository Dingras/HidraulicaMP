import './Products.css'
import Header from '../../components/Header/Header'
import Footer from  '../../components/Footer/Footer'
import HydraulicPistonLoader from '../../components/HydraulicPistonLoader/HydraulicPistonLoader'
import Product from '../../components/Product/Product'
import ProductV2 from '../../components/ProductV2/ProductV2'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {

    const { id } = useParams()
    const [dataCategory , setDataCategory] = useState({})
    const [dataProductsFilter , setDataProductsFilter] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        GetDataCategory(id)
        GetProductsFilter(id)
    },[id])


    const GetDataCategory = async (id) => {
        try {
            const response = await fetch(`https://api.hidraulicamp.com.ar/api/categories/${id}/`);
            const result = await response.json();
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            setDataCategory(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const GetProductsFilter = async (id) => {
        try{
            const resp = await fetch(`https://api.hidraulicamp.com.ar/api/products/category/${id}`);
            const JSONresp = await resp.json()
            if (!resp.ok) {
                throw new Error(`Error HTTP: ${resp.status}`);
            }
            setDataProductsFilter(JSONresp)
        }catch(error){
            console.error("Error fetching data:", error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <>
        <Header/>
        <h2 className='py-3 text-center'>{dataCategory.name}</h2>
            {
                loading ? (
                    <HydraulicPistonLoader />
                ) : dataProductsFilter.length > 0 ? (
                    <div className="container">
                        <div className="row row-cols-auto justify-content-center">
                            {dataProductsFilter.map((product, index) => (
                                <div className="col p-2" key={index}>
                                    {/* <Product name={product.name} description={product.description} img_url={product.url_img} count={product.count} /> */}
                                    <ProductV2 name={product.name} description={product.description} img_url={product.url_img} count={product.count} />

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