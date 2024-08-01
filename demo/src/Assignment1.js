import { useState } from "react";

const Assignment1 = () => {

    const [formData,setFormData] = useState({});

    const [name,setName] = useState();
    const [gender,setGender] = useState();
    const [skill,setSkill] = useState([])
    const [country,setCountry] = useState('ca')
    const [multipleSelect,setMultipleSelect] = useState([])
    const [description,setDescription] = useState('')


    const [submitted,setSubmitted] = useState(false)

    const handleName = (event) => {
        let name = event.target.value;
        setName(name);
    }

    const handleGender = (event) => {
        setGender(event.target.value)
    }

    const handleSkill = (event) => {
        let value = event.target.value;
        // setSkill((prev) => (
        //     prev.includes(value) ?  prev.filter(v => v !== value) : [...prev,value]
        // ))
        // const {value, checked} = event.target;
        // if(checked){
        //     setSkill([...skill,value]);
        // }else{
        //     setSkill(skill.filter(skill => skill !== value))
        // }

        setSkill(prevValue => (
            prevValue.includes(value) ? prevValue.filter(item => item !== value) : [...prevValue,value]
        ))
    }

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    const handleMultipleSelect = (event) => {
        let options = event.target.selectedOptions;
        let values = [];
        for(let ele of options){
            values.push(ele.value)
        }
        setMultipleSelect(values)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = () => {
        setSubmitted(true)
        setFormData({
            name : name,
            gender : gender,
            skill : skill.join(","),
            country : country,
            multipleSelect : multipleSelect.join(","),
            description: description
        })
    }

    return(
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" onChange={handleName} />
            </div>
            <br />
            <div>
                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" value="male" onChange={handleGender} /> Male
                <input type="radio" name="gender" value="female" onChange={handleGender} /> Female
            </div>
            <br />
            <div>
                <label htmlFor="">Skills</label>
                <input type="checkbox" name="skills" value="java" onChange={handleSkill} /> Java 
                <input type="checkbox" name="skills" value="javascript" onChange={handleSkill} /> Javascript
            </div>
            <br />
            <div>
               <label htmlFor="">Country</label>
               <select name="country" id="" onChange={handleCountry}>
                <option value="ca">Canada</option>
                <option value="usa">United States</option>
               </select>
            </div>
            <br />
            <div>
                <label htmlFor="">Multiple select</label>
                <select multiple={true} name="multiSelect" id="" onChange={handleMultipleSelect}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
            </div>
            <br />
            <div>
                <label htmlFor="">Descrioption</label>
                <textarea name="" id="" onChange={handleDescription}></textarea>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <div>
                <label htmlFor="">Selected Values</label>
                <hr />
                {   
                    submitted && 
                    <div>
                        <div>Name : {formData.name}</div>
                        <div>Gender : {formData.gender}</div>
                        <div>Skill : {formData.skill}</div>
                        <div>Country : {formData.country}</div>
                        <div>Multiple Select : {formData.multipleSelect}</div>
                        <div>Description : {formData.description}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Assignment1;