import { useState } from "react"
import "./airlineProduct.css"
import { useEffect } from "react"

export default function AirlineProduct() {
    const [options, setOptions] = useState([]);
    const [carrierCode, setCarrierCode] = useState("")
    const [numCode, setnumCode] = useState("")
    const [carrName,setCarrName] = useState("")

    async function fetchCarrierCode() {
        try {
            const result = await fetch(`http://localhost:3300/api/airlines`)
            const response = await result.json();
            // console.log(response.data)
            setOptions(response.data);
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchCarrierCode()
    }, [])

    useEffect(() => {
  if(carrierCode) {
    const selectedCarrierCode = options.find((item) => item.carr_code  === carrierCode)
    if(selectedCarrierCode) {
        setnumCode(selectedCarrierCode.num_carr_code)
        setCarrName(selectedCarrierCode.carr_name)
    }
  }
    },[carrierCode,options])
    return (
        <div className="container">
            <div className="label-container">
                <label className="capitalize decoration-solid text-3xl">
                    Carrier Code :
                    <select 
                    name="selectedCarrierCode"
                    value={carrierCode}
                    onChange={(e) =>setCarrierCode(e.target.value)}
                    >
                  {options && options.map((item) =>(
                    <option className="bg-black" key={item._id} value={item.carr_code}>
                        {item?.carr_code}
                    </option>
                  ))}
                    </select>
                </label>

                <label>
                    num code :
                    <input type="text" value={numCode} readOnly />
                </label>
                <label>
                    Carrier Name:
                    <input type="text" value={carrName} readOnly/>
                </label>
            </div>
            <div className="div2"
            ></div>
        </div>
    )
}