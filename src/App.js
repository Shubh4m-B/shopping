import React from 'react'
import RadioExampleRadioGroup from "./components/radioButtonGroup";
import NavBar from './components/NavBar';

const App = () => {

    const categories = ['medicine', 'category2', 'category3', 'category4']
    return (
        <div>
            <NavBar />
            <RadioExampleRadioGroup categories={categories} />

        </div>
    )
}

export default App