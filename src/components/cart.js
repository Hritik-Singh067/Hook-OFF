import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../../Navbar/Navbar'
import { Authcontext } from '../../contextProvider';
import { auth } from "../../firebase_config";
import { collection, query, updateDoc, where } from "firebase/firestore";
import { db } from '../../firebase_config';
import { getDocs, doc } from "firebase/firestore";
import "./cart.css";
import Image1 from '../images/I1.jpg';
import Image2 from '../images/I2.jpg';
import Image3 from '../images/I3.jpg';
import Image4 from '../images/I4.webp';
export const Cart = () => {
  const [products, setProducts] = useState([{ Product_id: 'id123', Product_price: 5000, Product_name: 'Printed Floral Shirt',Product_qty:1, Product_img: `${Image3}`, Product_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', Product_company: 'Adidas' }, { Product_id: 'id223', Product_price: 9000,Product_qty:2, Product_img: `${Image2}`, Product_name: 'Denim Blue Shirt', Product_desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', Product_company: 'Puma' }])
  const eventsRef = collection(db, "events");
  const { currentUser } = useContext(Authcontext)
  // const FetchAllUserProducts = async () => {
  //   const q1 = query(userRef, where("uid", "==", currentUser.uid))
  //   const temp1 = []
  //   const querySnapShot1 = await getDocs(q1)
  //   try {
  //     querySnapShot1.forEach((doc) => {
  //       temp1.push(doc.data())
  //     })
  //     // setCart(temp1[0].cart)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect(() => {
  //   FetchAllUserProducts()
  // })
  return (
    <div className='plan'>
      <Navbar />
      <div className='plans'>
        {
          <>
            <h1 className='cart-head'>My Cart</h1>
            <div className="carttt">

            <div className='products-container'>
              {
                products.map((product) => (
                  <div className='product-cart'>
                    <img src={product.Product_img}></img>
                    <div className='content'>
                      <div className='cart-details'>
                        <div className='product-name'>{product.Product_name}</div>
                        {/* <div className='plan-desc'>{plan.desc}</div> */}
                        <div className='company'>{product.Product_company}</div>
                        Quantity :
                      <i className="fa-solid fa-plus pluss"></i>
                      <p className='product-qty'>  
                      {product.Product_qty}
                      </p>
                      <i className="fa-solid fa-minus minuss"></i>
                      <p className='cart-product-price'>Rs : {product.Product_price}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="checkout">
              <p>Price(3 items) : Total Price</p>
              <p>Delivery Charges : FREE</p>
              <hr />
              <p>Total Amount : Rs23000</p>
              <hr />
            </div>
            </div>
            <button className='place-order-btn'>Place Order</button>
          </>
        }
      </div>
    </div>
  )
}
