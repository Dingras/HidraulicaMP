import React from 'react';
import './ProductV2.css';

const ProductV2 = (props) => {

    const renderBadge = () => {
        if (props.count > 0) {
            if (props.count < 5) {
                return <span className="product-tag limited">Últimas Unidades</span>;
            } else {
                return <span className="product-tag in-stock">En Stock</span>;
            }
        } else {
            return <span className="product-tag out-of-stock">Sin Stock</span>;
        }
    };

    return (
        <div className="product-card-v2">
            <div className="product-image-v2">
                <img src={props.img_url} alt={props.name} />
            </div>
            <div className="product-details-v2">
                <div className="product-tags-v2">
                    {/* <span className="product-tag offer">Oferta</span> */}
                    {/* {renderBadge()} */}
                </div>
                <h2 className="product-name-v2">{props.name}</h2>
                {/* <p className="product-description-v2">{props.description}</p> */}
            </div>
        </div>
    );
};

export default ProductV2;
