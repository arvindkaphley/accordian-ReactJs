import React from "react";
import ReactDOM from "react-dom/client";
import Accordian from "./components/Accordian";

function Container(){
    return (
        <div className="Container">
            <Accordian/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container/>);