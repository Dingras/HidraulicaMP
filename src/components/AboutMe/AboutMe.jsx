import './AboutMe.css'
import dataAboutMe from '../../services/Data/AboutMe.json'
import AboutMeCard from '../AboutMeCard/AboutMeCard'

const AboutMe = () => {
    
    return (
        <>
            <h2 className='title-aboutme'>¿Quiénes somos?</h2>
            {
                dataAboutMe.map((data)=>
                    <AboutMeCard key={data.id} id={data.id} url_img_vid={data.url_img_vid} description={data.description} />
                )
            }
        </>
    )
}

export default AboutMe