import React, {Fragment, useState } from "react"

const FormSkill = () => {
    let objectArray = [
        {id:1,name:'Ram',age:30,skills:['java','javascript']},
        {id:2,name:'Shyam',age:20,skills:['python','c']}]

    const [studentData,setStudentData] = useState(objectArray);
    const [selectedStudent,setSelectedStudent] = useState(1);
    const [student,setStudent] = useState({})
    const [populated,setPopulated] = useState(false)
    const [showSubSkill,setShowSubSkill] = useState(false)
    const [isJava,setJava] = useState(false);

    const handleSkill = (event) => {
        if(event.target.value === 'java' && event.target.checked){
            setJava(true);
        }else{
            setJava(false)
        }
    }

    const handleSubmit = () => {

        setShowSubSkill(isJava)
    }

    const handlePopulate = () => {
        setPopulated(true)
        const selectedId = parseInt(selectedStudent);
        let filterStudent = [...objectArray].filter((item) => ( item.id === selectedId));
        setStudent(filterStudent[0])
    }

    const handleChange = (event) => {
        setSelectedStudent(event.target.value)
    }
    return (
        <div>
            <label htmlFor="">Select Student</label>
            <select onChange={handleChange} value={selectedStudent}>
                {studentData.map((item,key) => (
                    <option key={key} value={item.id}>{item.name}</option>
                ))}
            </select>
            <button onClick={handlePopulate}>Populate</button>
                <div>
                    {
                        populated && 
                        <>
                            <label>Age</label>
                            <input type="text" value={student.age} onChange={() => {}} />
                            <br />
                            <label htmlFor="">Skills</label>
                            {
                                student.skills.map((item,key) => (
                                    <Fragment key={key}>
                                    <input key={key} type="checkbox" value={item} onChange={handleSkill} />{item}
                                    </Fragment>
                                ))
                            }
                            <>
                            {
                                showSubSkill && <div>
                                <label htmlFor="">Sub Skills</label>
                                <select name="" id="">
                                    <option value="Spring">Spring</option>
                                    <option value="Spring">Hibernate</option>
                                </select>
                                </div>
                            }
                            </>

                        </>

                    }
                </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default FormSkill