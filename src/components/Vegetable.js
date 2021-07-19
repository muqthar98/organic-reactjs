import React from "react";
import Product from "./Product";
import "./Vegetable.css";

export default function Vegetable() {
  return (
    <div>
      <div>
        <h1 className="title mt-5">Vegetable</h1>
      </div>
      <Product />
      <hr />
    </div>
  );
}
