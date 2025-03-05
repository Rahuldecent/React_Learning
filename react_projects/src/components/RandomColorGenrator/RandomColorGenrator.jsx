import React, { useState } from 'react'

const RandomColorGenrator = () => {
    const [typeOfColor, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');


    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }
    function handleCreateRandomColor() {

        if (typeOfColor == "hex") {
            let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
            let hexColor = "#"
            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomColorUtility(hex.length)]
            }
            setColor(hexColor)
        } else if (typeOfColor == "rgb") {
            const r = randomColorUtility(256)
            const g = randomColorUtility(256)
            const b = randomColorUtility(256)
          setColor(`rgb(${r},${g},${b})`)
        }
    }
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color

        }}
        >
            <button onClick={() => setColorType('hex')} >Create Hex Color</button>
            <button onClick={() => setColorType('rgb')}>Create RGB Color</button>
            <button onClick={handleCreateRandomColor}>Generate Random Color</button>

            <h1>{color}</h1>

        </div>
    )
}

export default RandomColorGenrator