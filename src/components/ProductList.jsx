import {useState} from "react";
import ProductCard from "./ProductCard";

import laptop from '../assets/laptop.jpg';
import camera from '../assets/camera.jpg';
import phone from '../assets/phone.jpg';
import headphones from '../assets/headphones.jpg';
import smartwatch from '../assets/smartwatch.jpg';
import tablet from '../assets/tablet.jpg';

const ProductList = () => {
const [filter, setFilter] = useState("all");

    const products = [
        { id: 1, name: "Laptop", price: 999.99, inStock: true, image: laptop },
        { id: 2, name: "Smartphone", price: 499.99, inStock: false, image: phone },
        { id: 3, name: "Headphones", price: 199.99, inStock: true, image: headphones },
        { id: 4, name: "Smartwatch", price: 299.99, inStock: false, image: smartwatch },
        { id: 5, name: "Tablet", price: 399.99, inStock: true, image: tablet },
        { id: 6, name: "Camera", price: 599.99, inStock: true, image: camera },
    ];

 const filteredProducts = products.filter((product) => {
 if (filter === "inStock") return product.inStock;
  if (filter === "outOfStock") return !product.inStock;
  return true;
  });

  return (
  <div className="product-page">
  <p>Browse our selection of products and check their availability.</p>

 <div className="filter-buttons">
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("inStock")}>In Stock</button>
  <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>
  </div>

    <div className="product-grid">
  {filteredProducts.map((product) => (
  <ProductCard key={product.id} {...product} />
  ))}
 </div>

 </div>
  );
};

export default ProductList;