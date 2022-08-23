import React from 'react';
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from 'cdbreact';

const Footer = () => {
  return (
    <CDBFooter style={{ backgroundColor: 'black' }} className="shadow mt-5">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: '90%' }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo" width="30px" />
              <span
                className="ml-3 h5 font-weight-bold"
                style={{ color: 'white' }}
              >
                Devwares
              </span>
            </a>
            <p className="my-3" style={{ width: '250px', color: 'white' }}>
              We are creating High Quality Resources and tools to Aid developers
              during the developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p
              className="h5 mb-4"
              style={{ fontWeight: '600', color: 'white' }}
            >
              Devwares
            </p>
            <CDBBox
              flex="column"
              display="flex"
              style={{ cursor: 'pointer', padding: '0' }}
            >
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Resources
              </CDBFooterLink>
              <CDBFooterLink style={{ color: 'white' }} href="/">
                About Us
              </CDBFooterLink>
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Contact
              </CDBFooterLink>
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Blog
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p
              className="h5 mb-4"
              style={{ fontWeight: '600', color: 'white' }}
            >
              Help
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ cursor: 'pointer', padding: '0' }}
            >
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Support
              </CDBFooterLink>
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Sign Up
              </CDBFooterLink>
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Sign In
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p
              className="h5 mb-4"
              style={{ fontWeight: '600', color: 'wheat' }}
            >
              Products
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ cursor: 'pointer', padding: '0' }}
            >
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Windframe
              </CDBFooterLink>
              <CDBFooterLink style={{ color: 'white' }} href="/">
                Loop
              </CDBFooterLink>
              <CDBFooterLink style={{ textColor: 'white' }} href="/">
                Contrast
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <small
            className="text-center"
            style={{ width: '50%', color: 'white' }}
          >
            &copy; Devwares, 2022. All rights reserved.
          </small>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;
