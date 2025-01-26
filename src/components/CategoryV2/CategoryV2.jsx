import React from 'react';
import './CategoryV2.css';

const CategoryV2 = (props) => {
    return (
        <a className="card-category-v2" href={"productos/" + props.id_category}>
            <div className="image-category-v2">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="name-category-v2">
                {props.name}
            </div>
        </a>
    );
};

export default CategoryV2;