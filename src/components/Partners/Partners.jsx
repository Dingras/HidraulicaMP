import './Partners.css'
import dataPartners from '../../services/Data/Home.json'

const Partners = () => {
    return (
        <div className="container text-center py-4">
            <div className="row row-cols-auto">
                {
                    dataPartners.partners.map((partner)=>(
                        <div className="col mx-auto">
                            <img className="partner-img" key={partner.id} src={partner.img_url} alt={partner.name}/>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Partners