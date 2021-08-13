import React from "react";
const PImage = require("../public/product_placeholder.png");

function ItemCard({ item }: any) {
  return (
    <div key={item.id} className="item-card">
      <div className="item-card-img">
        <img src={PImage} alt="item_image" />
      </div>
    </div>
  );
}

export default ItemCard;
