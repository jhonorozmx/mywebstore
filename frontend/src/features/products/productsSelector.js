export const selectProductsbyOwner = (state) => state.products.allProducts;

export const selectProductById = (state) => state.products.selectedProduct;

export const selectProductsLoading = (state) => state.products.isLoading;

export const selectProductsError = (state) => state.products.error;
