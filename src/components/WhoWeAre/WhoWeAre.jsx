import './WhoWeAre.css'
import data from '../../services/Data/Home.json'
import dataRoutes from '../../services/Data/Routes.json'

const WhoWeAre = () => {
    return (
        <div className='py-4 w-100 bg-dark'>
            <div className='text-center text-light'>
                <h1>{data.who_we_are.title}</h1>
                <p className='w-75 mx-auto'>
                    {data.who_we_are.description}
                </p>
                <a href={dataRoutes.us.link} className='btn btn-primary'>{data.who_we_are.button_text}</a>
            </div>
        </div>
    )
}

export default WhoWeAre