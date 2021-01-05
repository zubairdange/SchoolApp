import React from "react";
import "./MyBar.css";
import image2 from "../MyBar/image2.jpg";

export const MyBar = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <h4>
                {" "}
                {/* <span style={(color = blue)}> */}
                <u>Pickup</u>
                {/* </span> */}
                {/* <span style={(color = orangered)}> */}
                <u>Biz</u>
                {/* </span> */}
              </h4>
            </div>
            <div className="open-nav-menu">
              <span></span>
            </div>
            <div className="menu-overlay"></div>

            <nav className="nav-menu">
              <div className="close-nav-menu">
                <img src={image2} alt="img" />
              </div>
              <ul className="menu">
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Home <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a hre="#">WebDev</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">AndriodDev</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">SharePoint</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">PHP</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    News <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">Current Afairs</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Tody's Wheather</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">New Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">What We Have</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Services <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">WebDev</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">AndriodDev</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">SharePoint</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">PHP</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Pages <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">page 1</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 3</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 4</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    About <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">Our Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Feedback</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Overviews</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Star</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Contact <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">Email</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Service No.</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Text</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Telephonic</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
//   <section className="home-section">
//  </section>

// <script src="js/script.js"></script>
