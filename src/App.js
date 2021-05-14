import RadioExampleRadioGroup from "./components/radioButtonGroup";

const App = () => {

    const categories = ['medicine', 'category2', 'category3', 'category4']
    return <div>
        <RadioExampleRadioGroup categories={categories}/>
    </div>
}

export default App