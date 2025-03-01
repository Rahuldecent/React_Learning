import React, { useState } from "react"
import data from "./data"
import "./styles.css"
export default function Accordions() {

    let [seleted, setSelected] = useState(null)
    let [enableMultiSelection, setEnableMultiSelection] = useState(false)
    let [multiSelect, setMultiSelect] = useState([])

    function handleSingleSelection(currentId) {
        setSelected(currentId)
    }
    function handleMultiSelect(currentId) {
        let copyMultiple = [...multiSelect]
        const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(currentId)
        } else {
            copyMultiple.slice(findIndexOfCurrentId, 1)
        }
        setMultiSelect(copyMultiple)
    }
    return (
        <div className='container'>
            <button className="button" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordion">
                {data && data.length > 0 ?
                    (
                        data.map((item) => (
                            <div className="item" key={item.id}>
                                <div className="title" onClick={
                                    enableMultiSelection ? () => handleMultiSelect(item.id) :
                                        () => handleSingleSelection(item.id)
                                }>
                                    <h3 className="content">{item.question}</h3>
                                    <span>+</span>
                                </div>

                                {
                                    enableMultiSelection ? multiSelect.indexOf(item.id) != -1 && (
                                        <div className="content">
                                            <p>{item.answer}</p>
                                        </div>
                                    ) : seleted == item.id &&
                                    (
                                        <div className="content">
                                            <p>{item.answer}</p>
                                        </div>
                                    )
                                }
                                {/* {seleted == item.id && (
                                    <div className="content">
                                        <p>{item.answer}</p>
                                    </div>
                                )} */}
                            </div>
                        ))

                    )
                    : <div> No data found</div>
                }

            </div>
        </div>
    )
}
