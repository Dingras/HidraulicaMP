import './Partners.css'

const Partners = () => {
    return (
        <div className="container text-center py-4 my-4">
            <div className="row row-cols-auto py-3">
                <div className="col mx-auto"><img style={{ maxHeight:'100px', objectFit: 'cover' }} src="/Castrol.png" alt="Castrol"/></div>
                <div className="col mx-auto"><img style={{ maxHeight:'100px', objectFit: 'cover' }}src="/HSF.png" alt="Castrol" /></div>
                {/* <div className="col mx-auto"><img style={{ maxHeight:'100px', objectFit: 'cover' }}src="/Castrol.png" alt="Castrol" /></div>
                <div className="col mx-auto"><img style={{ maxHeight:'100px', objectFit: 'cover' }}src="/HSF.png" alt="Castrol" /></div> */}
            </div>
        </div>

    )
}

export default Partners