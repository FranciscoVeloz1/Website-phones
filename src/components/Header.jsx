import React from 'react'

//Importing SCSS
import '../assets/styles/components/Header.scss'

//Importing static files
import image1 from '../assets/static/image1.png'

const Header = () => (
    <header className="header">
        <div className="header__img">
            <img src={image1} />
        </div>

        <div className=" content">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo
                laboriosam quia voluptate odit inventore adipisci voluptates,
                tempore sunt culpa itaque saepe magnam quam quibusdam non. Sapiente
                eum, debitis libero aut deleniti quo, voluptatem corrupti cupiditate
                repellendus adipisci, quis mollitia odio suscipit officiis enim
                eligendi quod facilis dolorum eveniet vitae!
            </p>
            <a href="#" className="btn">Leer más</a>
        </div>
    </header>
)

export default Header