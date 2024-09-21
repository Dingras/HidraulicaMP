import './Product.css'

const Product = (props) => {
    return (
        <div className='card-product'>
            <img src={props.img_url} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Product