import React from 'react'
import './Clients.css'
import MessageBox from '../MessageBox/MessageBox'
import dataClients from '../../services/Data/Clients.json'

const Clients = () => {

    return (
        <div className='clients-container'>
            <h1 className='clients-title'>Nuestros Clientes y Amigos</h1>
            <div className='messages-container'>
                {
                    dataClients.map((client) => (
                        <MessageBox key={client.id} image={client.img_url} name={client.name} message={client.message} />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Clients