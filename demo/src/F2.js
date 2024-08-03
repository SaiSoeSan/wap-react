import { useState } from "react";

const data = [
    {Name:'Ram',Age:30,Skills:['java','javascript']},
    {Name:'Shyam',Age:20,Skills:['python','c']}
];

function Info1 (student, skillChanged, submit){

    // const [subSkills, setSubSkills] = useState([]);

    return (
        <>
            <div>
                Age
                <input type="text" value={student.Age}></input>
            </div>

            <div>
                Skills
                {
                    student.Skills.map(s => 
                        <>
                            <input type="checkbox" name={s} value={s} onChange={(e) => skillChanged(e)}></input>{s}
                        </>                        
                    )
                }
            </div>
            <button onClick={submit}>Submit</button>
        </>
    )
}


function F2(){

    const [selectedStudent, setSelectedStudent] = useState(data[0]);
    const studentChange = e => {
        setSelectedStudent(JSON.parse(e.target.value));
    }

    
    const [selectedSkills, setSelectedSkills] = useState([]);


    const skillChanged = e => {
       const {value,checked} = e.target;
       if(checked){
            setSelectedSkills([...selectedSkills,value])
       }else{
        setSelectedSkills(selectedSkills.filter(item => item != value))
       }
    }
    console.log(selectedSkills)

    const submitbtn = e => {
        // alert("submit")
        console.log("hererer")
        console.log(selectedSkills)
    }

    

    const [info1, setInfo1] = useState();
    const populate = e => {
        //setInfo1(Info1(selectedStudent, skillChanged, submit));
        setInfo1(
            <>
                <div>
                    Age
                    <input type="text" value={selectedStudent.Age}></input>
                </div>

                <div>
                    Skills
                    {
                        selectedStudent.Skills.map(s => 
                            <>
                                <input type="checkbox" name={s} value={s} onChange={(e) => skillChanged(e)}></input>{s}
                            </>                        
                        )
                    }
                </div>
                <button onClick={submitbtn}>Submit</button>
                <div style={{border:"1px solid red",height:"100px"}}>{selectedSkills}</div>
            </>
        )
    }

    return (
        <>
            <div>
                {/* Select Student */}
                <input type="checkbox" value="java" onChange={skillChanged} />Java
                <input type="checkbox" value="javascript" onChange={skillChanged} /> Javascript
                {/* <select onChange={studentChange}>
                {
                    data.map(d => 
                        <option key={d.Name} value={JSON.stringify(d)} selected={selectedStudent==d}>{d.Name}</option>
                    )
                }
                </select> */}
                <button onClick={populate}>Populate</button>
            </div>
            {info1}
        </>
    )


}

export default F2;