import React from 'react'

//Importing components
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import InfoOne from '../components/InfoOne'

//Importing Hooks
import useInitialState from '../hooks/useInitialState'

//Importing SASS
import '../assets/styles/App.scss';

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <Header />
            <Testimonial />
            <InfoOne />
        </div>
    )
}

export default App