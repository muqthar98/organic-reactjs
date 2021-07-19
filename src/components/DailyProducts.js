import React from "react";
import "./Vegetable.css";
import Product from "./Product";

export default function DailyProducts() {
  return (
    <div>
      <div>
        <h1 className="title mt-5">Daily Products</h1>
      </div>
      <Product />
    </div>
  );
}
