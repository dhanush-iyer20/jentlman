import React from "react";
import Card from "../components/Card";
import styles from "../style";
console.log("hello");

const Cards = () => {
  return (
    <div id="pain" className=" flex flex-col mb-[100px] ">
      <h1 className={`${styles.heading2} text-center mb-10`}>Problems</h1>
      <Card />
    </div>
  );
};

export default Cards;
