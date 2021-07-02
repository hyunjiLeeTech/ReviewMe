import React from "react";

import bee from "../../images/bee.png";
import koala from "../../images/koala.png";
import rabbit from "../../images/rabbit.png";
import toucan from "../../images/toucan.png";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>About Us</h1>
        <h4>Meet our team of developers! </h4>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-center">
          <div id="box-body" className="row mx-4 mb-4">
            <div className="col-lg-2 text-center mb-2">
              <img id="about-image" src={bee} alt="Logo" />
            </div>
            <div className="col">
              <h5 className="mt-2">Elisa Ng Li</h5>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div id="box-body" className="row mx-4 mb-4">
            <div className="col-lg-2 text-center mb-2">
              <img id="about-image" src={koala} alt="Logo" />
            </div>
            <div className="col">
              <h5 className="mt-2">Hyun Ji Lee</h5>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div id="box-body" className="row mx-4 mb-4">
            <div className="col-lg-2 text-center mb-2">
              <img id="about-image" src={rabbit} alt="Logo" />
            </div>
            <div className="col">
              <h5 className="mt-2">Krupa Kirtikumar Shah</h5>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div id="box-body" className="row mx-4 mb-4">
            <div className="col-lg-2 text-center mb-2">
              <img id="about-image" src={toucan} alt="Logo" />
            </div>
            <div className="col">
              <h5 className="mt-2">Sergey Kozyrev</h5>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
