import './Home.css'
import Header from '../../components/Header/Header'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import Welcome from '../../components/Welcome/Welcome'
import Footer from '../../components/Footer/Footer'
import Partners from '../../components/Partners/Partners'
import ContactUs from '../../components/ContactUs/ContactUs'
import SalesImg from '../../assets/sales.png'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

function Home() {

    const dataSale = () =>
    {
        Swal.fire({
            imageUrl: SalesImg,
            imageWidth: '25em',
            width: '25em',
            heightAuto: true,
            showConfirmButton: false,
            timer: 5000,      
            background: "transparent",
            imageAlt: "Oferta Hidraulica Manuel Pereyra",
        });
    }

    useEffect(() => {
        const checkDate = () => {
            const currentDate = new Date();
            // Fecha de finalizacion de la oferta
            const year = 2025;
            const month = 1;
            const day = 25;
            const targetDate = new Date(`${year}-${month}-${day}`);
            
            currentDate.setHours(0, 0, 0, 0);
            targetDate.setHours(0, 0, 0, 0);

            if (currentDate <= targetDate) {
                dataSale();
            }
        };

        checkDate();
    }, [])

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
