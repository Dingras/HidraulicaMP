import './WhoWeAre.css'
import data from '../../services/Data/WhoWeAre.json'

const WhoWeAre = () => {
    return (
        <div className='py-4 w-100 bg-dark'>
            <div className='text-center text-light'>
                <h1>{data.title}</h1>
                <p className='w-75 mx-auto'>
                    {data.description}
                </p>
                <a href='/nosotros' className='btn btn-primary'>{data.button_text}</a>
            </div>
        </div>
    )
}

export default WhoWeAre