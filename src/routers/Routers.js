import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <Routes>
         <Route path="home" element={<Home />} />
         {/* <Route path="shop" element={<Shop />} /> */}
         {/* <Route path="shop/:id" element={<Shop />} /> */}
        <Route path="shop">

        </Route>
         <Route path="cart" element={<Cart />} />

         <Route path="checkout" element={<Checkout />} />

         <Route path="login" element={<Login />} />
         <Route path="signup" element={<Signup />} />


    </Routes>
  )
}

export default Routers