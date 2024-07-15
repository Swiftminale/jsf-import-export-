import React from "react";
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export const Footer = () => {
  return (
    <CDBBox className="shadow">
      <div
        className="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <div className="d-flex align-items-center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src="../../assets/img/logo/logo.jpg" width="30px" />
            <span className="ms-4 h5 mb-0 font-weight-bold">Devwares</span>
          </a>
          <small className="ms-2">
            &copy; Devwares, 2024. All rights reserved.
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
  );
};
export default Footer;