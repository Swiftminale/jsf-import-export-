import React from "react";
import "./Information.css"; // Import the CSS file for styles
import linkimg1 from "../../assets/img/Little-Feed-Co.jpg";
import linkimg2 from "../../assets/img/img1.jpg";
import linkimg3 from "../../assets/img/img2.jpg"; // Import the image file

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
            <div className="tag">
              <div className="image-wrapper">
                <img src={linkimg1} alt="placeholder" className="image-small" />
                <p>
                  "Dedicated to nourishing farms and feeding futures, our
                  commitment to quality starts from the ground up. From the
                  heart of our coops to the tables of our customers, trust in
                  every feed."
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className="image-wrapper">
                <img src={linkimg2} alt="placeholder" className="image-small" />
                <p>
                  "At JSF, we believe in more than just feeding chickens; we
                  believe in cultivating healthier flocks and stronger
                  communities. With every grain, we ensure farms thrive and
                  families are nourished."
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className="image-wrapper">
                <img src={linkimg3} alt="placeholder" className="image-small" />
                <p>
                  "From our fields to your flocks, every feathered friend
                  deserves the best. With a passion for poultry and a dedication
                  to excellence, we deliver nutrition that keeps chickens
                  clucking and customers smiling."
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Information;
