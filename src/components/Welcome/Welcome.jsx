import './Welcome.css'
import dataHome from '../../services/Data/Home.json'

const Welcome = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <img src={dataHome.welcome.img_url} alt={dataHome.welcome.img_title} className="img-fluid w-100 welcome-img"/>
        </div>
    )
}

export default Welcome