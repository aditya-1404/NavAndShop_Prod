import React from "react";
import $ from "jquery";
import "./CSS/Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  //   function bannerSwitcher() {
  //     var next = $(".sec-1-input:checked").next(".sec-1-input");

  //     if (next.length) {
  //       next.prop("checked", true);
  //     } else {
  //       $(".sec-1-input").first().prop("checked", true);
  //     }
  //   }

  //   var bannerTimer = setInterval(bannerSwitcher, 5000);

  //   $("nav .controls label").click(function () {
  //     clearInterval(bannerTimer);
  //     bannerTimer = setInterval(bannerSwitcher, 5000);
  //   });

  return (
    <section id="section-1">
      <div class="content-slider">
        <input
          type="radio"
          id="banner1"
          class="sec-1-input"
          name="banner"
          checked
        />
        <input type="radio" id="banner2" class="sec-1-input" name="banner" />
        <input type="radio" id="banner3" class="sec-1-input" name="banner" />
        <input type="radio" id="banner4" class="sec-1-input" name="banner" />
        <div class="slider">
          <div id="top-banner-1" class="banner">
            <div class="banner-inner-wrapper">
              <h2></h2>
              <h1>Welcome to Nav&Shop</h1>
              <div class="line"></div>
              <div class="learn-more-button">
                <Link
                  className="mall-code-link"
                  to="/mallcode"
                  href="#section-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div id="top-banner-2" class="banner">
            <div class="banner-inner-wrapper">
              <h2>What We Do</h2>
              <h1>Nav&Shop</h1>
              <div class="line"></div>
              <div class="learn-more-button">
                <a href="#section-4">Learn More</a>
              </div>
            </div>
          </div>
          <div id="top-banner-3" class="banner">
            <div class="banner-inner-wrapper">
              <h2>Here We Are</h2>
              <h1>We Are Nav&Shop</h1>
              <div class="line"></div>
              <div class="learn-more-button">
                <a href="#section-6">Learn More</a>
              </div>
            </div>
          </div>
          <div id="top-banner-4" class="banner">
            <div class="banner-inner-wrapper">
              <h2>Our Contacts</h2>
              <h1>Welcome to Nav&Shop</h1>
              <div class="line"></div>
              <div class="learn-more-button">
                <a href="#main-footer">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="controls">
            <label for="banner1">
              <span class="progressbar">
                <span class="progressbar-fill"></span>
              </span>
              <span>01</span> Intro
            </label>
            <label for="banner2">
              <span class="progressbar">
                <span class="progressbar-fill"></span>
              </span>
              <span>02</span> Work
            </label>
            <label for="banner3">
              <span class="progressbar">
                <span class="progressbar-fill"></span>
              </span>
              <span>03</span> About
            </label>
            <label for="banner4">
              <span class="progressbar">
                <span class="progressbar-fill"></span>
              </span>
              <span>04</span> Contacts
            </label>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Landing;
