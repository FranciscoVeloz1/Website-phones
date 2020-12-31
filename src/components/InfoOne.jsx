import React from 'react'

import image2 from '../assets/static/image2.png';

import '../assets/styles/components/InfoOne.scss';

const InfoOne = () => (
    <section className="info-one" id="acerca">
        <div className="info-one__img">
            <img src={image2} />
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
    </section>
)

export default InfoOne