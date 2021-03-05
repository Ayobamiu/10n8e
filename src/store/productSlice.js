import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import memoize from "lodash.memoize";

const slice = createSlice({
  name: "products",
  initialState: { list: [], product: {}, cart: { list: [] } },
  reducers: {
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
    },
    productsRequestFailed: (products, action) => {
      products.loading = false;
    },
    productRequested: (products, action) => {
      products.loading = true;
    },
    productReceived: (products, action) => {
      products.product = action.payload;
      products.loading = false;
    },
    productRequestFailed: (products, action) => {
      products.loading = false;
    },
    productAddStart: (products, action) => {
      products.loading = true;
      products.status = "loading";
    },
    productAdded: (products, action) => {
      products.list.push(action.payload);
      products.loading = false;
      products.status = "Added successfully";
    },
    productAddFailed: (products, action) => {
      products.loading = false;
      products.status = "Failed";
    },
    cartAddStart: (products, action) => {
      products.cart.loading = true;
      // products.loading = true;
      // products.status = "loading";
    },
    cartAdded: (products, action) => {
      products.cart.list.push(action.payload);
      products.cart.loading = false;

      products.cart.status = "Added successfully";
    },
    cartAddFailed: (products, action) => {
      products.cart.loading = false;
      products.cart.status = "Failed";
    },
    cartRemoveStart: (products, action) => {
      products.cart.loading = true;
    },
    cartRemoved: (products, action) => {
      products.cart.list.pop(action.payload);
      products.cart.loading = false;

      products.cart.status = "Removed successfully";
    },
    cartRemoveFailed: (products, action) => {
      products.cart.loading = false;
      products.cart.status = "Failed";
    },
    productRemoved: (products, action) => {
      products.list.pop((product) => product._id !== action.payload._id);
    },
  },
});

export const {
  productAdded,
  productsRequested,
  productsReceived,
  productsRequestFailed,
  productRequested,
  productReceived,
  productRequestFailed,
  productAddStart,
  productAddFailed,
  productRemoved,
  cartAddFailed,
  cartAddStart,
  cartAdded,
  cartRemoveFailed,
  cartRemoveStart,
  cartRemoved,
} = slice.actions;

export default slice.reducer;

//Action creators
export const loadProducts = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: "/products",
      // params: params,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};

export const loadProduct = (productId) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/products/${productId}`,
      // params: params,
      onStart: productRequested.type,
      onSuccess: productReceived.type,
      onError: productRequestFailed.type,
    })
  );
};

export const addproduct = (product) =>
  apiCallBegan({
    url: "/products",
    method: "post",
    data: product,
    headers: { "content-type": "multipart/form-data" },
    onSuccess: productAdded.type,
    onError: productAddFailed.type,
  });

export const addCart = (productId, count) =>
  apiCallBegan({
    url: `/carts/${productId}?count=${count}`,
    method: "post",
    onSuccess: cartAdded.type,
    onError: cartAddFailed.type,
  });
export const removeCart = (productId) =>
  apiCallBegan({
    url: `/carts/${productId}`,
    method: "post",
    onSuccess: cartRemoved.type,
    onError: cartRemoveFailed.type,
  });

export const removeproduct = (id) =>
  apiCallBegan({
    url: "/products/" + id,
    method: "delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
    },
    onSuccess: productRemoved.type,
  });

export const carts = (state) => state.app.products.cart.list;
export const products = (state) => state.app.products.list;
export const product = (state) => state.app.products.product;
