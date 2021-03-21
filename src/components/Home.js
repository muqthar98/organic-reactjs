import React from 'react'
import{Button} from 'reactstrap'
import './Home.css'


export default function Home() {
    return (
        <div>
            <h1 className="title1 mt-3 ">The Organic Choice</h1>
          <div className="home_row" >
              <img
              className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/organic1_360x.jpg?v=1609211039"
              alt=""
              />
               <img
              className="image2" 
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/organic_360x.jpg?v=1609211200"
              alt=""
              />
               <img
               className="image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/organic2_360x.jpg?v=1609211219"
              alt=""
              />
               <img
               className="image4"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/files/organic3_360x.jpg?v=1609211234"
              alt=""
              />
          </div>
          
          <div>
          <h1 className="title1 mt-5">Best Offers</h1>
          </div>

          <div className="home_row1">
          <img
              className="image5"
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1607439289_immu_webmini.jpg"
              alt=""
              />
               <img
              className="image6" 
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1613668788_min33_webmini.jpg"
              alt=""
              />
          </div>

          <div>
          <h1 className="title2 mt-5">Our Fresh Picks</h1>
          </div>

          <div className="home_row2" >
              <img
              className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic5_360x.png?v=1613979883"
              alt=""
              />
               <img
              className="image2" 
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic4_360x.png?v=1613979490"
              alt=""
              />
               <img
               className="image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic2_360x.png?v=1613978391"
              alt=""
              />
               <img
               className="image4"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic1_360x.png?v=1613979843"
              alt=""
              />
          </div>

          <div className="home_row3" >
              <img
              className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic3_360x.png?v=1613979050"
              alt=""
              />
               <img
              className="image2" 
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic7_360x.png?v=1613978266"
              alt=""
              />
               <img
               className="image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic8_360x.png?v=1613979125"
              alt=""
              />
               <img
               className="image4"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/products/pr-organic6-1_360x.png?v=1613979000"
              alt=""
              />
          </div>
          
          <div className="button"> 
          <Button classname="btn-primary productbutton">View All Products</Button>
          </div>
          
          <h1 className="title3 mt-3">Our Latest News</h1>
          <div className="home_row" >
              <img
              className="image1"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/articles/blog-organic-square-3_360x.jpg?v=1613637608"
              alt=""
              />
               <img
              className="image2" 
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/articles/blog-organic1_360x.jpg?v=1613633098"
              alt=""
              />
               <img
               className="image3"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/articles/blog-organic-square-2_360x.jpg?v=1613637594"
              alt=""
              />
               <img
               className="image4"
              src="https://cdn.shopify.com/s/files/1/0421/6153/7180/articles/blog-organic-square_360x.jpg?v=1613637579"
              alt=""
              />
          </div>
         
        </div> 
    )
}

