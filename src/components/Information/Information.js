import React from "react";
import "./Information.css"; // Import the CSS file for styles

function Information() {
  return (
    <div className="container">
      <div className="left-info">
        <h3>Welcome to JFS Trading Import and Export Plc</h3>
        <p>
          Welcome to JFS Trading Import and Export Plc, where we specialize in
          facilitating global trade with a commitment to reliability and
          excellence. Our mission is to connect markets worldwide, ensuring
          seamless import and export services tailored to meet the diverse needs
          of our clients.
        </p>
        <h3>Our Services</h3>
        <p>
          At JFS Trading Import and Export Plc, we offer comprehensive services
          designed to support your international trade needs: Import Services:
          We bring quality products from around the globe to your doorstep,
          ensuring timely delivery and competitive pricing. Export Services: We
          help businesses reach new markets by managing logistics and compliance
          efficiently, enabling growth and expansion. Consultancy: Our expert
          advisors provide guidance on international trade regulations, market
          trends, and strategic planning to maximize your business success.
          Logistics: We optimize supply chain management, ensuring smooth
          transportation and distribution of goods globally.
        </p>
      </div>
      <div className="right-info">
        <ul>
          <li>
            <a href="/">
              <div>
                <h4>Link 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac nisl eget urna vestibulum.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div>
                <h4>Link 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac nisl eget urna vestibulum.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div>
                <h4>Link 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ac nisl eget urna vestibulum.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Information;
