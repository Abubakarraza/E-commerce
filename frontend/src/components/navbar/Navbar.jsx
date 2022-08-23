import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBAccordion,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

export default function App() {
  const quantity = useSelector((state) => state.cart.carts.cartItem);
  console.log(quantity.length);
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
          {/* <MDBNavbarItem>
            <BsFillCartFill
              style={{ color: 'white', width: '30px', height: '30px' }}
            />
            {quantity.length > 0 && (
              <Badge pill bg="danger">
                {quantity.length}
              </Badge>
            )}
          </MDBNavbarItem> */}
          <MDBAccordion>
            <BsFillCartFill
              style={{ color: 'white', width: '30px', height: '30px' }}
            />
            {quantity.length > 0 && (
              <Badge pill bg="danger">
                {quantity.length}
              </Badge>
            )}
          </MDBAccordion>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
