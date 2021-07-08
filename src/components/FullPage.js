import Header from "./Header";
import Home from "./Home";

import React from "react";

const data = [
  {
    name: "Model S",
    text: "Order Online for Touchless Delivery",
    button1: "Customer Order",
    button2: "Existing Inventory",
    bg_image: "images/model-s.jpg",
  },
  {
    name: "Model X",
    text: "Order Online for Touchless Delivery",
    button1: "Customer Order",
    button2: "Existing Inventory",
    bg_image: "images/model-x.jpg",
  },
  {
    name: "Model Y",
    text: "Order Online for Touchless Delivery",
    button1: "Customer Order",
    button2: "Existing Inventory",
    bg_image: "images/model-y.jpg",
  },
  {
    name: "Model 3",
    text: "Order Online for Touchless Delivery",
    button1: "Customer Order",
    button2: "Existing Inventory",
    bg_image: "images/model-3.jpg",
  },
];
function FullPage() {
  return (
    <div>
      <Header />
      <Home data={data} />
    </div>
  );
}

export default FullPage;
