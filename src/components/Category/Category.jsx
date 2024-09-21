import './Category.css'

const Category = (props) => {
    return (
        <div className='card-category'>
            <img src={props.image} alt="Imagen de categoryo" />
            <div className='info-category'>
                <span className='title-category'>{props.name}</span>
                <span className='subtitle-category'>{props.brand}</span>
                <p>
                    {props.description}
                </p> 
                <a href={"productos/" + props.id_category} className='btn btn-primary'>Ver</a>
            </div>
        </div>
    )
}

export default Category