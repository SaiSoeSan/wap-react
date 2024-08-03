import { useState } from "react";

const NameLocation = () => {
    const [added,setAdded] = useState(false);
    const [data,setData] = useState([]);

    const [name,setName] = useState();
    const [locations, setLocations] = useState([])
    const [showAddedSuccess,setShowAddedSuccess] = useState(false);
    const [filteredData,setFiltered] = useState([])
    const [showFilter,setShowFilter] = useState(false);

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleLocation = (e) => {
        let options = e.target.selectedOptions;
        let values = [];
        for(let ele of options){
            values.push(ele.value);
        }
        setLocations(values)
    }

    const handleFindAll = () => {
        setShowAddedSuccess(false);

    }

    const handleSubmit = () => {
        if(name !== '' && locations.length > 0){
            let obj = {
                name : name,
                locations : locations
            }
            setData([...data,obj])
            setShowAddedSuccess(true)
        }
    }

    const handleFindByLocation = (e) => {
        setShowFilter(true)
        setFiltered([])
        let copyData = [...data];
        let objArray = [];
        for(let ele of copyData){
            let myLocations = ele.locations;
            for(let currentLocation of myLocations){
                if(locations.includes(currentLocation)){
                    let obj = {
                        name : ele.name,
                        locations : myLocations
                    }
                    objArray.push(obj);
                    break;
                }
            }
        }
        setFiltered(objArray)
    }

    const handleAdd = () => {
        setAdded('true')
    }
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <button onClick={handleAdd} style={{textAlign:"center"}}>Add</button>
            </div>
            {
                showAddedSuccess && 
                <div style={{color:"green"}}>Added {data.length} User(s)</div>
            }
            
            <div style={{color:"green"}}>
                {
                    (!showAddedSuccess && !showFilter) && 
                    data.map((item,key) => (
                        <div key={key}>{item.name}{" "}{[item.locations].join(",")}</div>
                    ))
                }
                {
                    (!showAddedSuccess && showFilter) && 
                    filteredData.map((item,key) => (
                        <div key={key}>{item.name}{" "}{[item.locations].join(",")}</div>
                    ))
                }
            </div>
           {
            added && 
            <div style={{border:"1px blue solid",padding:"10px"}}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={handleName} style={{marginLeft:"100px"}} />
                <br /><br />
                <label htmlFor="">Location</label>
                <select multiple name="" id="" onChange={handleLocation} style={{marginLeft:"100px"}}>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="italy">Italy</option>
                </select>
                <br />
                <br />
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleFindAll}>Find All</button>
                    <button onClick={handleFindByLocation}>Find Uses by Location</button>
                </div>
            </div>
           }
        </div>
    )
}
export default NameLocation;