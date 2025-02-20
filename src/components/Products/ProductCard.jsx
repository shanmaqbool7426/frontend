import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, truncateText } from '@/utils/helpers';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    price,
    description,
    stock,
    isActive
  } = product;

  if (!isActive) return null;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src="/product-placeholder.png" // Add your image handling logic
          alt={name}
          width={300}
          height={300}
          className={styles.image}
        />
        {stock === 0 && <span className={styles.outOfStock}>Out of Stock</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>{formatPrice(price)}</p>
        <p className={styles.description}>{truncateText(description, 100)}</p>
        
        <div className={styles.actions}>
          <Link 
            href={`/products/${_id}`}
            className={styles.viewButton}
          >
            View Details
          </Link>
          <button 
            className={styles.addToCartButton}
            disabled={stock === 0}
            onClick={() => handleAddToCart(product)}
          >
            {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;