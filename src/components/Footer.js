import React from "react";
import { Button } from "reactstrap";
import { Container } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Footer.css";

export default function Footer() {
  return (
    <Container>
      <footer className="footer">
        <img
          className="header_logo1"
          src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
          alt=""
        />

        <Container className="contactdetails">
          <p>Phone : +91 9840520132</p>
          <p>Email : shopping@gmail.com</p>
          <p>Address : 2, Richy Street,Chennai</p>
        </Container>

        <Container className="vl" />

        <Container className="support1">
          <h5>Support</h5>
          <p className="support2">Help</p>
          <p>Contact Us</p>
          <p>Feedback</p>
          <p>Unsubscribe</p>
          <p>Reservations</p>
        </Container>

        <Container className="vl" />

        <Container className="policies1">
          <h5>Policies</h5>
          <p className="policies2">Privacy Policy</p>
          <p>Terms of use</p>
          <p>Gift card conditions</p>
          <p>Shipping</p>
          <p>Return</p>
        </Container>

        <Container className="vl" />

        <Container className="newsletter1">
          <h5>Join Our NewsLetter</h5>
          <p className="policies2">
            Subscribe to our newsletter and get 10% off
          </p>
          <p>your first purchase.</p>
          <input placeholder="Enter your email address" className="input" />
          <Button className="pd-5 btn">
            <ArrowForwardIcon />
          </Button>
        </Container>
      </footer>
      <hr className="hr" />
      <Container>©2021 Logo. All right reserved </Container>
    </Container>
  );
}
