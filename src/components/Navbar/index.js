import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          <h1>Foro Crypto</h1>
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Inicio
          </NavLink>
          <NavLink to="/forum" activeStyle>
            Foro
          </NavLink>
          <NavLink to="/login" activeStyle>
            Ingresar
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/register">Registrar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
