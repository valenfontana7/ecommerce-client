import React from "react";
import ItemCard from "../components/ItemCard";

const items = [
  {
    id: 1,
    name: "Product 1",
  },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  {
    id: 5,
    name: "Product 5",
  },
  { id: 6, name: "Product 6" },
  { id: 7, name: "Product 7" },
  { id: 8, name: "Product 8" },
  { id: 9, name: "Product 9" },
  {
    id: 10,
    name: "Product 10",
  },
  { id: 11, name: "Product 11" },
  { id: 12, name: "Product 12" },
  { id: 13, name: "Product 13" },
];

function ItemCatalog() {
  return (
    <div className="item_catalog">
      {items.map((i: any) => {
        return <ItemCard item={i} />;
      })}
    </div>
  );
}

export default ItemCatalog;
