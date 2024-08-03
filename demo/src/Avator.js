import { Fragment, useState } from "react";

const Avator = () => {
  let sliderObjects = [
    {
      id: 1,
      image: "../images/avatar1.jpeg",
    },
    {
      id: 2,
      image: "../images/avatar2.jpeg",
    },
    {
      id: 3,
      image: "../images/avatar3.jpeg",
    },
  ];
  const [sliders, setSliders] = useState(sliderObjects);
  const [showImageId, setShowImageId] = useState(1);

  const [avatar, setAvatar] = useState([]);
  const [color, setColor] = useState("pink");
  const [bottom, setBottom] = useState("jeans");

  const handleAvator = (e) => {
    const {value,checked} = e.target;
    if(checked){
        if(value === 'boy'){
            setBottom('jeans')
        }
        setAvatar([...avatar,value]);
    }else{
        setAvatar(avatar.filter((item,key) => item !== value))
    }
  };

  const handleColor = (e) =>{
     setColor(e.target.value);
  }

  const handleBottom = (e) => {
    setBottom(e.target.value)
  }

  const handleNext = (e) => {
    if (showImageId < 3) {
      setShowImageId(showImageId + 1);
    }
  };
  const handlePrevious = (e) => {
    if (showImageId > 1) {
      setShowImageId(showImageId - 1);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "200px", justifyContent: "center" }}>
        <div
          style={{ alignSelf: "center", fontSize: "25px", cursor: "pointer" }}
          onClick={handlePrevious}
        >
          &lt;
        </div>
        <div style={{ textAlign: "center" }}>
          {sliders.map((item, key) => (
            <div key={key}>
              {item.id === showImageId && (
                <img
                  key={key}
                  src={item.image}
                  alt=""
                  style={{ width: "400px", height: "250px", display: "block" }}
                />
              )}
            </div>
          ))}
          {sliders.map((item, key) => (
            <Fragment key={key}>
              <input type="radio" readOnly checked={item.id === showImageId} />
            </Fragment>
          ))}
        </div>
        <div
          style={{ alignSelf: "center", fontSize: "25px", cursor: "pointer" }}
          onClick={() => handleNext()}
        >
          &gt;
        </div>
      </div>
      <div>Create Avatar</div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div>
          <label htmlFor="">Avator</label>
          <input type="checkbox" value="boy" onChange={handleAvator} /> Boy
          <input type="checkbox" value="girl" onChange={handleAvator} /> Girl
          <br />
          <br />
          {
            avatar.length === 1 && 
            <div>
            <label htmlFor="">Dress Color</label>
            <select name="" id="" onChange={handleColor}>
              <option value="pink" selected={color === 'pink'}>Pink</option>
              <option value="purple" selected={color === 'purple'}>Purple</option>
            </select>
            <br />
            <br />
            {
                avatar[0] === 'girl' &&
                <div>
                    <label htmlFor="">Bottom Wear</label>
                    <input type="radio" value="jeans" onChange={handleBottom} checked={bottom === 'jeans'} />
                    Jeans
                    <input type="radio" value="skirt" onChange={handleBottom} checked={bottom === 'skirt'} />
                    Skirts
                </div>
            }
          </div>
          }
          
        </div>
        { avatar.length === 1  && 
        <div>
            {
                avatar[0] === 'boy' &&  <img
                src="../images/boy.jpeg"
                style={{ width: "40px", display: "block" }}
                alt=""
              />
            }
            {
                avatar[0] === 'girl' &&  <img
                src="../images/girl.jpeg"
                style={{ width: "40px", display: "block" }}
                alt=""
              />
            }
         
            {
                color === 'pink' && 
                <img
                    src="../images/pink.jpeg"
                    style={{ width: "40px", display: "block" }}
                    alt=""
                />
            }
            {
                color === 'purple' && 
                <img
                    src="../images/purple.avif"
                    style={{ width: "40px", display: "block" }}
                    alt=""
                />
            }
          {
            bottom === 'jeans' && 
            <img src="../images/jean.jpg" style={{ width: "40px" }} alt="" />
          }
          {
            bottom === 'skirt' &&
            <img src="../images/long-skirt.jpg" style={{ width: "40px" }} alt="" />
          }
        </div>
}
      </div>
    </div>
  );
};

export default Avator;
