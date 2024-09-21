import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Services from './pages/Services/Services.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Products from './pages/Products/Products.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/categorias' element={ <Categories/> }/>
                <Route path='/productos/:id' element={ <Products/> }/>
                <Route path='/servicios' element={ <Services/> }/>
                <Route path='/nosotros' element={ <About/> }/>
                <Route path='/contactos' element={ <Contacts /> }/>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
)
