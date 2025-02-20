'use client';

import { withAuth } from '@/components/hoc/withAuth';
import { useGetProductsQuery } from '@/services/productApi';
import ProductCard from '@/components/Products/ProductCard';
import Link from 'next/link';
import styles from './products.module.css';

function ProductsPage() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return <div className={styles.loader}>Loading products...</div>;
  }

  if (isError) {
    return <div className={styles.error}>Failed to load products</div>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Our Products</h1>
        <Link href="/products/add" className={styles.addButton}>
          Add New Product
        </Link>
      </div>
      <div className={styles.grid}>
        {products?.products?.products?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default withAuth(ProductsPage);
