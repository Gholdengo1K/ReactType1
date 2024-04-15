//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    /*let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'Paris'
    ];*/

    /*const handleSelectItem = (item: string) => {
        console.log(item);
    }*/return (<div>
       <Button color = "secondary" onClick = {() => console.log('Clicked')}> 
            My Button
        </Button>
    </div>
    );
    
}//<ListGroup items = {items} heading = "Cities" onSelectItem={handleSelectItem} /> actually within the return

export default App

/* return (<div className="alert alert-primary">
       <Alert> 
            Hello <span>World</span>
        </Alert>
    </div>);*/ //part of alert project