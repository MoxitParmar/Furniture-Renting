import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { db, storage } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";


const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {

  },[navigate, cartItems])


  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        items: cartItems,
        amount: totalAmount,
        quantity: totalQty  
      })
      console.log("Document written with Id: " + docRef.id)
      
    } catch (error) {
      console.log("Error: " +error)
    }
    toast.success("order successfully added!");

    dispatch(cartActions.reset());
    navigate("/");

  }

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping:
                    <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>

                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button 
                  onClick = {placeOrder}
                className="buy__btn auth__btn  w-100">
                  Place an oder
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
