import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor="dark">
        <MDBContainer>
          <MDBNavbarBrand>
            <NavLink to="/">
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
                height="30"
                alt=""
                loading="lazy"
              />
            </NavLink>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
