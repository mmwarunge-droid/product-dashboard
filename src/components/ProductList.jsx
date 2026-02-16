import ProductCard from "./ProductCard";

const ProductList = () => {
    const products = [
        { id: 1, name: "Laptop", price: 999.99, inStock: true },
        { id: 2, name: "Smartphone", price: 499.99, inStock: false },
        { id: 3, name: "Headphones", price: 199.99, inStock: true },
        { id: 4, name: "Smartwatch", price: 299.99, inStock: false },
        { id: 5, name: "Tablet", price: 399.99, inStock: true },
        { id: 6, name: "Camera", price: 599.99, inStock: true },
    ];
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;