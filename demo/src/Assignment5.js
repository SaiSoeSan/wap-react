import { useState } from "react";

const Assignment5 = () => {

    const dumpData = [
        {
          img: "1.jpeg",
          firstName: "Maharishi",
          lastName: "Mahesh",
        },
        {
          img: "2.jpeg",
          firstName: "Arha",
          lastName: "Batt",
        },
        {
          img: "3.jpeg",
          firstName: "John",
          lastName: "Doe",
        },
        {
          img: "4.jpeg",
          firstName: "Akash",
          lastName: "Chatterrji",
        },
      ];

    const [data,setData] = useState(dumpData);

    const [sortAsc,setSortAsc] = useState(true)

    const handleDelete = (index) => {
        setData(data.filter((item,key) => key !== index))
    }

    const handleSort = () => {
        setSortAsc(!sortAsc)
        if(sortAsc){
            setData([...data].sort((a,b) => a.firstName > b.firstName ? 1 : (a.firstName < b.firstName ? -1 : 0 )))
        }else{
            setData([...data].sort((b,a) => a.firstName > b.firstName ? 1 : (a.firstName < b.firstName ? -1 : 0 )))
        }
    }

  return (
    <div>
      <button onClick={handleSort}>sort</button>
      <div style={{ display: "flex", gap: "20px" }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <div>
              <img
                src={item.img}
                alt=""
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "grid", margin: "5px" }}>
              <div>{item.firstName}</div>
              <div>{item.lastName}</div>
              <div>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment5;
