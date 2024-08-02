import './Service.css'


const Service = (props) => {
    return (
        <div className="card text-bg-dark service-container m-2">
            <img src={props.url_img} className="card-img w-100" alt="..." style={{ maxHeight:'250px', objectFit: 'cover'}}/>
            <div className="card-img-overlay">
                <h5 className="card-title title-service">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default Service