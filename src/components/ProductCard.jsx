import styles from "./ProductCard.module.css";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProductCard = ({ id, name, price, inStock, image }) => {
  return (
  <Card
  className={`${styles.productCard} ${!inStock ? styles.outOfStockCard : ""}`}
    elevation={3}
    >
  <CardMedia
  component="img"
  image={image}
  alt={name}
  className={styles.productImage}
/>
  <CardContent
  className={styles.cardContent}
  >
  <Typography variant="h6" className={!inStock ? styles.outOfStockText : ""}>
  {name}
  </Typography>

  <Typography variant="h6" className={styles.priceText}>
  ${price}
  </Typography>

  <Typography className={inStock ? styles.inStock : styles.outOfStock}>
  {inStock ? "In Stock" : "Out of Stock"}
  </Typography>

  <Button
  variant="contained"
  disabled={!inStock}
  className={styles.buyButton}
>
{inStock ? "Add to Cart" : "Unavailable"}
</Button>
  </CardContent>
  </Card> 
  );
};

export default ProductCard;