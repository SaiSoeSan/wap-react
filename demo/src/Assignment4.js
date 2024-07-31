import { useState } from "react";

const Assignment4 = () => {
    const dumpyList1 = ['Rose-Red','Chamoline - Yellow','lily- white'];
    const dumpyList2 = [['First Col','Second Col'],['2 First Col','2 Second Col']]
    const [list,setList] = useState(dumpyList1)
    const [table,setTable] = useState(dumpyList2)

    const [showList,setShowList] = useState(true)

    const[showTable,setShowTable] = useState(true)

    const convertListToTable = () => {
        setShowList(!showList)
    }

    const convertTableToList = () => {
        setShowTable(!showTable)
    }

    return (
        <div>
            {
                showList && 
                <ul>
                {
                    list.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
                </ul>
            }
            {
                !showList && 
                <table>
                    <tbody>
                        {
                            list.map((item,index) => (
                                <tr key={index}>
                                    {
                                        item.split("-").map(singleItem => (
                                            <td>{singleItem}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
            <button onClick={convertListToTable}>Convert List to Table</button>
            {
                showTable && 
                <table>
                <tbody>
                    {
                        table.map((item,index) => (
                            <tr key={index}>
                                {item.map((singleItem,key) => (
                                    <td>{singleItem}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            }
            <br />
            
            {
                !showTable && 
                <ul>
                {
                    table.map((item,index) => (
                        <>
                        {
                            item.map((singleItem,index) => (
                                <li>{singleItem}</li>
                            ))
                        }</>
                    ))
                }
                </ul>
            }
            <button onClick={convertTableToList}>Convert Table to List</button>
        </div>
    )
}

export default Assignment4;