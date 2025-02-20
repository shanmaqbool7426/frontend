'use client'; // Mark this as a Client Component

import { useForm } from 'react-hook-form';
import { useAddProductMutation } from '@/services/productApi'; // Adjust the import path
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/productAdd.css'; // Import global styles

import { withAuth } from '@/components/hoc/withAuth';
const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addProduct, { isLoading, isError, error }] = useAddProductMutation();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await addProduct(data).unwrap();
      console.log('Product added successfully:', response);
      router.push('/products'); // Redirect to product listing page
    } catch (err) {
      console.error('Failed to add product:', err);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="product-form-container">
        <div className="form-header">
          <h1>Add New Product</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Product name is required' })}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              {...register('price', {
                required: 'Price is required',
                min: { value: 0, message: 'Price must be a positive number' },
              })}
            />
            {errors.price && (
              <p className="error-message">{errors.price.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              {...register('description', { required: 'Description is required' })}
            />
            {errors.description && (
              <p className="error-message">{errors.description.message}</p>
            )}
          </div>

          {isError && (
            <p className="error-message">
              {error?.data?.message || 'Failed to add product. Please try again.'}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>

        <Link href="/products" className="back-link">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default withAuth(AddProductPage);