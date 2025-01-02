import { createContext } from "react";
import Component2 from "./ContextComponents/Component2";
import React from "react";
export var ThemeProvider = React.createContext();
function UseContext() {
    return (
        <div>
            <ThemeProvider.Provider value={{sgpa:"10.00",cgpa:"9.99"}}> 
                <h1>This is UseContext</h1>
                <Component2></Component2>
            </ThemeProvider.Provider>
        </div>
    )



}
export default UseContext;