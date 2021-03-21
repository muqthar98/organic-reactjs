import React from 'react'
import './Vegetable.css'

export default function Vegetable() {
    return (
        <div>
            <div>
          <h1 className="title mt-5">Organic</h1>
          </div>

          <div className="home_row" >
              <img
              className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic5_540x.png?v=1613979883"
              alt=""
              />
               <img
              className="image2" 
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic4_540x.png?v=1613979490"
              alt=""
              />
               
          </div>

          <div className="home_row" >
          <img
               className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic2_540x.png?v=1613978391"
              alt=""
              />

          <img
               className="image2"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic1_540x.png?v=1613979843"
              alt=""
              />
           </div>
           <div className="home_row">   
               <img
              className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic3_540x.png?v=1613979050"
              alt=""
              />
               <img
              className="image2" 
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic7_540x.png?v=1613978266"
              alt=""
              />
          </div>

          <div className="home_row">
          <img
               className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic8_540x.png?v=1613979125"
              alt=""
              />
               <img
              className="image2"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic6-1_540x.png?v=1613979000"
              alt=""
              />
          </div>

        </div>
    )
}

