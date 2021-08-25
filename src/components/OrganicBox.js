import React from "react";
import "./Vegetable.css";
import Product from "./Product";

export default function OrganicBox() {
  return (
    <div>
      <div>
        <h1 className="title mt-5">Organic Box</h1>
      </div>
      <Product />
    </div>
  );
}
