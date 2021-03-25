import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import brandLogo from "./brandLogo.webp";
import style from "./Header.module.css";

const Header = (props) => {
  let nav = React.createRef();

  const handleScroll = () => {
    let currentY = window.scrollY;
    let navbar = document.getElementById("navbar");
    if (currentY > 110) {
      navbar.classList.add("bg-dark");
      navbar.style.transition = "all 0.2s";
    } else {
      navbar.classList.remove("bg-dark");
      navbar.style.transition = "all 0.2s";
    }
  };

  window.addEventListener("scroll", handleScroll, true);

  return (
    <header>
      <Navbar scrolling fixed="top" expand="md" id="navbar">
        <Navbar.Brand href="#home">
          <a href="">
            <img className={style.brandLogo__img} src={brandLogo} />
          </a>
          <span className={style.brandText__span}>Travander</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/login" >
            <ButtonCustom style="rounded_transparent" text="Sign in" />
          </Nav.Link>
          <Nav.Link href="/login" >
            <ButtonCustom style="rounded_button_gradient" text="Sign up" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
