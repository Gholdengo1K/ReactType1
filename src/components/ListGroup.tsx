import { useState } from "react";
// { items: [], heading: string}
interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void; //onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    
    //hook (pirate lol), change state
    const [selectedIndex, setSelectedIndex] = useState(-1);

    heading = "";
    
    

    


    
    
    return( //use fragment to wrap all, either imported or just <> </>
        <> 
        <h1>{heading}</h1> 
            {items.length === 0 ? <p>No item found</p> : null}
            {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
            {items.map((item, index)=> (<li 
                                            className ={selectedIndex === index 
                                                ? 'list-group-item active' 
                                                : 'list-group-item'
                                            } 
                                            key={item} 
                                    onClick={() => { 
                                        setSelectedIndex(index); 
                                        onSelectItem(item);
                                        }}
                                    >
                {item}
            </li>
                               ))}
        </ul>
        </>//(event) => console.log(event)
    );
}

export default ListGroup;
/*//import { Fragment } from "react";
import {MouseEvent} from "react";


let selectedIndex = 0
//hook (pirate lol), change state
const [selectedIndex, setSelectedIndex] = useState(-1);
arr[0] //variable (selectedIndex)
arr[1] // updater function

npm i bootstrap              
<li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
          
          
          if(items.length === 0)
        return(
            <>
                <h1>List</h1>
                
                <p>No item found</p>
            </>
        );
          
          
          
          const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    }
          
          
          //event handler
    const handleClick = (event: MouseEvent) => console.log(event)
          
          onClick={handleClick}
          */