import { useState } from "react"

export const Assignment2 = () => {

    const [leftOptions,setLeftOptions] = useState(['rose','lilly','daffodil']);
    const [selectedLeftOptions,setSelectedLeftOptions] = useState([])


    const [rightOptions,setRightOptions] = useState([]);
    const [selectedRightOptions,setSelectedRightOptions] = useState([])


    const handleLeftOption = (event) => {
        const options = event.target.selectedOptions;
        let values = [];
        for(let ele of options){
            values.push(ele.value)
        }
        setSelectedLeftOptions(values);
    }

    const handleRightOption = (event) => {
        const options = event.target.selectedOptions;
        let values = [];
        for(let ele of options){
            values.push(ele.value)
        }
        setSelectedRightOptions(values);
    }

    const moveRight = (event) => {
        setRightOptions([...rightOptions,...selectedLeftOptions]);
        setLeftOptions(leftOptions.filter(value => !selectedLeftOptions.includes(value)))
        setSelectedLeftOptions([])
        setSelectedRightOptions([...selectedRightOptions,...selectedLeftOptions])
    }

    const moveAllRight = (event) => {
        setRightOptions([...rightOptions,...leftOptions]);
        setLeftOptions([])
        setSelectedLeftOptions([])
        setSelectedRightOptions([...selectedRightOptions,...leftOptions])
    }

    const moveLeft = (event) => {
        setLeftOptions([...leftOptions,...selectedRightOptions]);
        setRightOptions(rightOptions.filter(value => !selectedRightOptions.includes(value)))
        setSelectedRightOptions([])
        setSelectedLeftOptions([...selectedLeftOptions,...selectedRightOptions])
    }

    const moveAllLeft = (event) => {
        setLeftOptions([...leftOptions,...rightOptions]);
        setRightOptions([])
        setSelectedRightOptions([])
        setSelectedLeftOptions([...selectedLeftOptions,...rightOptions])
    }


    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
                <select style={{width:"50px"}} multiple name="" value={selectedLeftOptions} onChange={handleLeftOption}>
                    {
                        leftOptions.map((option,index) => (
                            <option key={index} value={option}>{option}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <div><button onClick={moveRight}>&gt;</button></div>
                <div><button onClick={moveAllRight}>&gt;&gt;</button></div>
                <div><button onClick={moveLeft}>&lt;</button></div>
                <div><button onClick={moveAllLeft}>&lt;&lt;</button></div>
            </div>

            <div>
                <select multiple name="" id="" value={selectedRightOptions} style={{width:"50px"}} onChange={handleRightOption}>
                    {
                        rightOptions.map((option,index) => (
                            <option key={index} value={option}>{option}</option>
                        )) 
                    }
                </select>
            </div>
        </div>
    )
}