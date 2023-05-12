import axios from "axios";
import { logInFailure, logInStart, logInSuccess } from "../redux/authRedux";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  deleteProductStart,
  deleteProductSucess,
  deleteProductFailure,
  createProductSucess,
  createProductFailure,
  createProductStart,
  updateProductStart,
  updateProductSucess,
  updateProductFailure,
} from "../redux/productRedux";
const URL = axios.create({ baseURL: "http://localhost:3001" });
const token = JSON.parse(localStorage.getItem("user"))?.token;

// **** auth api requests ****
export const login = async (dispatch, user,navigate) => {
  dispatch(logInStart());
  try {
    const response = await URL.post("/auth/logIn", user);
    localStorage.setItem("user", JSON.stringify(response.data));

    dispatch(logInSuccess(response.data));
    navigate("/")
  } catch (error) {
    dispatch(logInFailure());
  }
};
export const handleLogout = async (navigate) => {
  try {
    localStorage.clear();
    navigate("/logIn", { replace: true });
  } catch (error) {
  }
};


// **** user api requests ****
export const getUsers = async () => {
  try {
    const res = await URL.get(`/users`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    }
    );
    return res.data;
  } catch (err) {}
};


// **** product api requests ****
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await URL.get("/products");
    dispatch(getProductsSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(getProductsFailure());
  }
};

// creating product
export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    const res = await URL.post(`/products`, product, {
      headers: { authorization: `bearer ${token}` },
    });
    dispatch(createProductSucess(res.data));
    return res.data;
  } catch (err) {
    dispatch(createProductFailure);
  }
};

// updating product
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await URL.patch(`/products/${id}`, product, {
      headers: { authorization: `bearer ${token}` },
    });
    dispatch(updateProductSucess(res.data));
    return res.data;
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// deleteing product
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await URL.delete(`/products/${id}`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    dispatch(deleteProductSucess(res.data));
    return res.data;
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
