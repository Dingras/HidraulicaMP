import './Partners.css'
import dataPartners from '../../services/Data/Home.json'

const Partners = () => {
    return (
        <div className="container text-center py-4">
            <div className="row row-cols-auto">
                {
                    dataPartners.partners.map((partner)=>(
                        <div className="col mx-auto" key={partner.id}>
                            <img className="partner-img" src={partner.img_url} alt={partner.name}/>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Partners