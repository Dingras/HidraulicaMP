import './LinkContact.css'

const LinkContact = (props) => {
    return (
        <div className='m-2'>
            <a href={props.url_contact} className="btn btn-primary btn-lg w-100" target='_blank'>
                <i className={'bi '+ props.icon}></i> {props.name}
            </a>
        </div>
    )
}

export default LinkContact