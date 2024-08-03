import './LinkContact.css'

const LinkContact = (props) => {
    return (
        <div className='m-2'>
            <a href={props.link} className="btn btn-primary btn-lg w-100">
                <i className={'bi '+ props.icon}>{props.name}</i>
            </a>
        </div>
    )
}

export default LinkContact