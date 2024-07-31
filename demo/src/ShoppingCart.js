import { Suspense, useState } from "react";

const ShoppingCart = () => {
  let obj = [
    { flavor: "Pike Place", price: "43.04", checked: true },
    { flavor: "Pumpkin spice", price: "52.08", checked: false },
  ];

  const [checkout, setCheckout] = useState({});

  let defaultQuantity = [
    {
      type: "24 Count (pack of 4)",
    },
    {
      type: "10 Count (pack of 6)",
    },
  ];

  const [data, setData] = useState(obj);
  const [quantityType, setQuantityType] = useState(defaultQuantity);
  const [selectedOption, setSelectedOption] = useState(obj[0].flavor);
  const [selectedQuantity, setSelectedQuantity] = useState(
    "24 Count (pack of 4)"
  );
  const [showedImage, setShowImage] = useState(
    "https://m.media-amazon.com/images/I/814-cZVGojL._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg"
  );

  const [showOveredImage,setShowedOverImage] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleFlavor = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value !== "Pike Place") {
      setShowImage(
        "https://m.media-amazon.com/images/I/81C7ZQHz+4L._SX679_.jpg"
      );
    } else {
      setShowImage(
        "https://m.media-amazon.com/images/I/814-cZVGojL._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg"
      );
    }
  };

  const handleQuantity = (event) => {
    const value = event.target.value;
    setSelectedQuantity(value);
  };

  const handleCheckout = () => {
    setSubmitted(true);
    setCheckout({
      flavor: selectedOption,
      quantity: selectedQuantity,
    });
  };
  
  const onHover = () => {
    setShowedOverImage(!showOveredImage);
  };

  return (
    <div>
      {submitted && (
        <div>
          Ordered <b>{checkout.quantity} </b> of <b>{checkout.flavor}</b>
        </div>
      )}
      <img
        src={showedImage}
        alt=""
        width="100px"
        style={{ cursor: "pointer" }}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      />

      {showOveredImage && (
        <img
          src={showedImage}
          alt=""
          style={{ position: "absolute", width: "150px" }}
        />
      )}

      <div>Pick Flavors</div>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            width: "150px",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid goldenrod",
          }}
        >
          <input
            type="radio"
            name="flavor"
            value={item.flavor}
            onChange={handleFlavor}
            checked={selectedOption === item.flavor}
          />
          <label>{item.flavor}</label>
          <div>{item.price}</div>
        </div>
      ))}

      <div style={{ marginTop: "10px", marginBottom: "10px" }} name="quantity">
        Quantity
        <select name="quantityType" onChange={handleQuantity}>
          {quantityType.map((item, key) => (
            <option key={key} value={item.type}>
              {item.type}
            </option>
          ))}
        </select>
        <input type="button" value="Checkout" onClick={handleCheckout} />
      </div>
    </div>
  );
};

export default ShoppingCart;
