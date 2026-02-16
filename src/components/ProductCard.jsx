import styles from "./ProductCard.module.css";

const ProductCard = ({ id, name, price, inStock }) => {
  return (
    <div className={`${styles.productCard} ${
        !inStock ? styles.outOfStockCard : ""
      }`}
    >
    <h3 className={!inStock ? styles.outOfStockText: ""}>{name}</h3>

    <p >Price: ${price}</p>

    <p className={inStock ? styles.inStockText : styles.outOfStockText}>{inStock ? "In Stock" : "Out of Stock"}
 </p> 

    </div>
  );
};

export default ProductCard;