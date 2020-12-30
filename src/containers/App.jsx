import React from 'react'

//Importing components
import Header from '../components/Header'

//Importing Hooks
import useInitialState from '../hooks/useInitialState'

//Importing SASS
import '../assets/styles/App.scss';

const App = () => {
    return (
        <div className="App">
            <Header />
        </div>
    )
}

export default App