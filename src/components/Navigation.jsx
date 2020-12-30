import React from 'react'

//Importing SCSS
import '../assets/styles/components/Navigation.scss'

const Navigation = () => (
    <nav className="nav-main" id="inicio">
        <a href="/" className="nav__brand">Smartphones</a>

        <ul className="nav__menu">
            <li>
                <a href="#inicio">Inicio</a>
            </li>
            <li>
                <a href="#acerca">Acerca</a>
            </li>
            <li>
                <a href="#contacto">Contacto</a>
            </li>
        </ul>
    </nav>
)

export default Navigation