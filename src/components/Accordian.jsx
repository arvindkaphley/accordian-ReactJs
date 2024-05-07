import { useState } from "react";
import { data } from "./data.js";
// Single selection
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentid) {
        setSelected(getCurrentid === selected ? null : getCurrentid);
    }

    function handleMultiSelection(getCurrentid) {
        let cpyMultiple = [...multiple]
        const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentid)
        if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentid)
        else cpyMultiple.splice(findIndexofCurrentId, 1)

        setMultiple(cpyMultiple)
    }

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className="item">
                        <div
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            }
                            className="title"
                        >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 &&
                                <div className="content">{dataItem.answer}</div> :
                                selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                        }
                    </div>
                ))
            ) : (
                <div>No data found</div>
            )}
        </div>
    </div>

}
