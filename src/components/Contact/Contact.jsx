import './Contact.css'
import dataContacts from '../../services/Data/Contacts.json'
import LinkContact from '../LinkContact/LinkContact'

const Contact = () => {
    return (
        <div className='mx-auto contact-container'>
            {
                dataContacts.map((contact) =>(
                    <LinkContact key={contact.id} url_contact={contact.url} name={contact.name} icon={contact.icon} />
                ))
            }
        </div>
    )
}

export default Contact   