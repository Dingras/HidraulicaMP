import './Home.css'
import Header from '../../components/Header/Header'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import Welcome from '../../components/Welcome/Welcome'
import Footer from '../../components/Footer/Footer'
import Partners from '../../components/Partners/Partners'
import ContactUs from '../../components/ContactUs/ContactUs'

function Home() {

    return (
        <>
            <Header/>
            <div className='px-2'>
                <Welcome/>
                <WhoWeAre/>
                <Partners/>
                <ContactUs/>
            </div>
            <Footer/>
        </>
    )
}

export default Home
