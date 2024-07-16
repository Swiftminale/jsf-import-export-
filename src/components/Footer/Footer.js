import React from "react";
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import "./Footer.css";
import logo from "../Footer/image.png";
export const Footer = () => {
  return (
    <div className="Container">
      <CDBBox className="shadow">
        <div
          className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
          style={{ width: "80%" }}
        >
          <div className="d-flex align-items-center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="90px" />
              {/* <span className="ms-4 h5 mb-0 font-weight-bold">JFS</span> */}
            </a>
            <small className="ms-2">
              &copy; JFS, 2024. All rights reserved.
            </small>
          </div>
          <div className="d-flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </div>
        </div>
      </CDBBox>
    </div>
  );
};

export default Footer;
