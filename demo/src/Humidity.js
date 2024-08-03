import { useState } from "react";

const Humidity = () => {

    let obj = [{ humidity: 20, speed: 30 }, { humidity: 10, speed: 40 }];
    const [data,setData] = useState([]);
    const [filteredObject,setFilteredObject] = useState([]);
    
    const handleMultipleSelect = (event) => {
        let result = [];
        for(let ele of event.target.selectedOptions){
            let currentObj = obj.map(item => ({[ele.value] : item[ele.value]}));
            result = [...result, ...currentObj];
        }
        setFilteredObject(result)
    }

    console.log(filteredObject);

    const handleSubmit = () => {
        setData(filteredObject)
    }

    return (
        <div>
            <select multiple name="" id="" onChange={handleMultipleSelect}>
                <option value="humidity">humidity</option>
                <option value="speed">speed</option>
            </select>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <br />
            <br />
            <div>
                {
                    data.map((item,index) => {
                        const key = Object.keys(item)[0]; 
                        const value = item[key];
                       return (
                        <div key={key}> 
                            <label htmlFor="">{key}</label>
                            <input type="text" value={item[key]} readOnly />
                        </div>
                       )
                    })
                }
            </div>
        </div>
    )
}
export default Humidity;