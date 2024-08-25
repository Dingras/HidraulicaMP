import './Welcome.css'
import dataHome from '../../services/Data/Home.json'

const Welcome = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <video src={dataHome.welcome.video_url} className="card-img img-fluid w-100 welcome-img" autoPlay loop muted></video>
        </div>
    )
}

export default Welcome