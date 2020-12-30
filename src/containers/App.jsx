import React from 'react'

//Importing components
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'

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
        </div>
    )
}

export default App