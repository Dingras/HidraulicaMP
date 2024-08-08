import './Partners.css'

const Partners = () => {
    return (
        <div className="container text-center py-4">
            <div className="row row-cols-auto">
                <div className="col mx-auto"><img style={{ maxHeight:'100px', objectFit: 'cover' }} src="/Castrol.png" alt="Castrol"/></div>
                <div className="col mx-auto"><img style={{ maxHeight:'100px', objectFit: 'cover' }} src="/HSF.png" alt="Hidraulica San Francisco" /></div>
                <div className="col mx-auto"><img style={{ maxHeight:'100px', objectFit: 'cover' }} src="/MoroH.png" alt="Moro Hidraulica" /></div>
            </div>
        </div>

    )
}

export default Partners