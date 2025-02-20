import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi', 
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }), 
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct, 
      }),
      invalidatesTags: ['Product'], // Invalidate product list cache
    }),

    // Fetch all products
    getProducts: builder.query({
      query: () => '/products', // Endpoint for fetching products
      providesTags: ['Product'], // Cache tag for product list
    }),

    // Update a product
    updateProduct: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `/products/${id}`, // Endpoint for updating a product
        method: 'PUT',
        body: updates, // Data to update
      }),
      invalidatesTags: ['Product'], // Invalidate product list cache
    }),

    // Delete a product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`, // Endpoint for deleting a product
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'], // Invalidate product list cache
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;