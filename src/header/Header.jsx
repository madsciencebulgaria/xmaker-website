import React, { Component } from "react";

export default function header() {
  return (
    <header id="portfolio">
      <a href="#">
        <img
          src="/w3images/avatar_g2.jpg"
          style={{ width: "65px;" }}
          class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
        />
      </a>
      <span
        class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
        onclick="w3_open()"
      >
        <i class="fa fa-bars" />
      </span>
      <div class="w3-container">
        <h1>
          <b>My Portfolio</b>
        </h1>
        <div class="w3-section w3-bottombar w3-padding-16">
          <span class="w3-margin-right">Filter:</span>
          <button class="w3-button w3-black">ALL</button>
          <button class="w3-button w3-white">
            <i class="fa fa-diamond w3-margin-right" />Design
          </button>
          <button class="w3-button w3-white w3-hide-small">
            <i class="fa fa-photo w3-margin-right" />Photos
          </button>
          <button class="w3-button w3-white w3-hide-small">
            <i class="fa fa-map-pin w3-margin-right" />Art
          </button>
        </div>
      </div>
    </header>
  );
}
