import './Product.css'

const Product = (props) => {
    return (
        <div className='card-product'>
            <img src={props.image} alt="" />
            <div className='info-product'>
                <span className='title-product'>{props.name}</span>
                <span className='subtitle-product'>{props.brand}</span>
                <p>
                    {props.description}
                </p>
                <button className='btn btn-primary'>Ver</button>
            </div>
        </div>
    )
}

export default Product