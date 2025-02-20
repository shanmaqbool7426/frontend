import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductItem.module.css';

const       ProductItem = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        {/* <Image
          src={'/placeholder.png'}
          alt={product.name}
          width={200}
          height={200}
          className={styles.productImage}
        /> */}
      </div>
      <div className={styles.productInfo}>
        {/* <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productDescription}>{product.description}</p> */}
        <div className={styles.actions}>
          {/* <Link href={`/products/${product.id}`} className={styles.viewButton}>
            View Details
          </Link> */}
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;