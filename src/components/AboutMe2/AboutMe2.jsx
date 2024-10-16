import '../AboutMe/AboutMe.css'
import dataAboutMe from '../../services/Data/AboutMeCarrousel.json'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AboutMeCard from '../AboutMeCard/AboutMeCard'

const AboutMe = () => {
    
    return (
        <>
            <Slide autoplay duration={2000} transitionDuration={500}>
                {
                    dataAboutMe.map((data)=>(
                        <AboutMeCard key={data.id} id={data.id} url_img_vid={data.url_img_vid} description={data.description} />
                    ))
                }
            </Slide>
        </>
    )
}

export default AboutMe