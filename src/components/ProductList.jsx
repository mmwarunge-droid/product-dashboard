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
const [cartItems, setCartItems] = useState([])

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

//Add items to shopping cart
const addToCart = (product) => {
  setCartItems ((prevItems) => {
    const existingItem=prevItems.find((item)=> item.id===product.id);
  if (existingItem) {
    return prevItems.map((item)=>
      item.id===product.id?
    { ...item, quantity: item.quantity + 1}
    :item
   );
  }else {
    return [...prevItems, {...product, quantity: 1}];
  }
  });
};
//Remove items from cart
const removeFromCart=(productId)=>{
  setCartItems((prevItems) =>
    prevItems.filter((item)=>item.id !==productId
    )
  )};
//items in cart cart
const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


//value of cart
const totalCost=cartItems
.reduce ((total, item)=>total + item.price * item.quantity,0)
.toFixed(2);


  return (
  <div className="product-page">
  <p>Browse our selection of products and check their availability.</p>

 <div className="filter-buttons">
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("inStock")}>In Stock</button>
  <button onClick={() => setFilter("outOfStock")}>Out of Stock</button>
  </div>
<h2>Available Products</h2>
    <div className="product-grid">
  {filteredProducts.map((product) => (
  <ProductCard key={product.id} {...product} addToCart={addToCart} />
  ))}
 </div>
 <div className="shopping-cart" style={{marginTop: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff" }}>
 <h2>Shopping Cart</h2>
  {cartItems.length === 0 ? (
  <p>Your cart is empty.</p>
   ) : (
  <ul style={{ listStyle: "none", padding: 0 }}>
  {cartItems.map((item) => (
  <li key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
  <span>{item.name} x {item.quantity}</span>
  <span>${(item.price * item.quantity).toFixed(2)}</span>
  <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "1rem" }}>Remove</button>
  </li>
  ))}
  </ul>
  )}
  <p><strong>Total Items:</strong> {totalItems}</p>
  <p><strong>Total Cost:</strong> ${totalCost}</p>
  </div>
  </div>

  );
};

export default ProductList;