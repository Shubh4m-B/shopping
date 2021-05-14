import CardItem from "./components/CardItem";
import NavBar from "./components/NavBar";
import RadioExampleRadioGroup from "./components/radioButtonGroup";

const App = () => {

    const categories = ['medicine', 'category2', 'category3', 'category4']
    const cards = [{
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
        title: 'bike',
        description: 'broom broom',
        price: 8798
    }, {
        image: 'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'car',
        description: 'ting ting',
        price: 98

    }, {
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        title: 'bus',
        description: 'pee pee',
        price: 3.00
    },]
    return <div>
        <NavBar/>
        <div style={{height: '80%', width: '80%', margin: "auto"}}>
            <RadioExampleRadioGroup categories={categories}/>
            <CardItem cards={cards}/>
        </div>
    </div>
}

export default App