import React, { useState } from "react";

function Th1()  {
    const [items, setItem] = useState(["Item 1", "Item 2", "Item 3"]);
    const [showlist, setshowList] = useState(false);
    const [inputText, setInputText] = useState("");

    const addItem =() =>{
        setItem([...items,inputText]);
        setInputText("");
    }
    const removeItem =() =>{
        setItem(items.slice(0, items.length - 1));
    }
    const hideShow =() =>{
        setshowList(!showlist)
    }

        return (
            <div>
            <button onClick={hideShow}>{showlist ? "Show" : "Hide"}</button>
            {!showlist && (
              <>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <input type="text"value={inputText} onChange={(input) => setInputText(input.target.value)}
                />
                <button onClick={addItem}>Add</button>
                <button onClick={removeItem}>Remove</button>
              </>
            )}
          </div>
        );
      }

export default Th1;
