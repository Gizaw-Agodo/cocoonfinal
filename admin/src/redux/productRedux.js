import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    isError: false,
    isModal: false,
  },
  reducers: {
    // getting a product

    getProductsStart: (state) => {
      state.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    // deleting a product
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    deleteProductSucess: (state, action) => {
      state.isFetching = false;
      state.products = state.products.filter(
        (product) => product._id !== action.payload.product._id
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    //creating product
    setIsModal: (state) => {
      state.isModal = false;
    },
    createProductStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    createProductSucess: (state, action) => {
      state.isModal = true;
      state.isFetching = false;
      state.products.push(action.payload);
    },
    createProductFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    // updating a product
    updateProductStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    updateProductSucess: (state, action) => {
      state.isModal = true;
      state.isFetching = false;
      state.products =  state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        )
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const {
  getProductsFailure,
  getProductsSuccess,
  getProductsStart,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSucess,
  createProductFailure,
  createProductStart,
  createProductSucess,
  setIsModal,
  updateProductFailure,
  updateProductStart,
  updateProductSucess
} = productSlice.actions;

export default productSlice.reducer;
