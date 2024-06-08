import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavBar from "./components/navbar.jsx";
import Content from "./components/content.jsx";
import { useState, useEffect } from "react";
import productImage from "../../images/image-product-1-thumbnail.jpg";
import data from "./data/data.js";

function App() {
  const price = 125;
  const [getAmount, setAmount] = useState(0);
  const [cart, setCart] = useState({});

  const [order, setOrder] = useState({
    name: "Fall Limited Edition Sneakers",
    price: price * getAmount,
    amount: getAmount,
    image: productImage,
  });

  const [products] = useState(data);
  const [value, setValue] = useState(3);
  const { mainImage } = products[value];
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    //if previous index is not === 4-1 (cause image have 0,1,2,3) it will + 1 to change image if it equal it reset to 0//
    setSlideIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const reduceAmount = () => {
    if (getAmount > 0) {
      setAmount(getAmount - 1);
    }
  };

  const addAmount = () => {
    setAmount(getAmount + 1);
  };

  const handleClick = () => {
    if (order.amount >= 1) {
      setCart(order);
    }
  };

  const handleDelete = () => {
    setCart({});
    setOrder((prevOrder) => ({
      ...prevOrder,
      amount: 0,
    }));
    setAmount(0);
  };

  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      price: price * getAmount,
      amount: getAmount,
    }));
  }, [getAmount, price]);

  return (
    <div
      className="container_app"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      `}
    >
      <NavBar
        order={order}
        size={order.amount}
        cart={cart}
        setCart={setCart}
        price={price}
        handleDelete={handleDelete}
      />
      <Content
        reduceAmount={reduceAmount}
        addAmount={addAmount}
        getAmount={getAmount}
        handleClick={handleClick}
        products={products}
        mainImage={mainImage}
        setValue={setValue}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
        slideIndex={slideIndex}
      />
    </div>
  );
}

export default App;
