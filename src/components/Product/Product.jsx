import './Product.css'

const Product = (props) => {

    const renderBadge = () => {
        if (props.count > 0) {
            if (props.count < 5) {
                return <span className="badge limited">Últimas Unidades</span>;
            } else {
                return <span className="badge in-stock">En Stock</span>;
            }
        } else {
            return <span className="badge out-of-stock">Sin Stock</span>;
        }
    };

    return (
        <div className='card-product'>
            <img src={props.img_url} alt={props.name} />
            <div>
                {/* {renderBadge()} */}
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Product