import axios from "axios";


import {
  logInFailure,
  logInStart,
  logInSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "../redux/features/authSlice.js";

const URL = axios.create({ baseURL: "http://localhost:3001/" });


// log in request
export const login = async (dispatch, user, navigate) => {
  dispatch(logInStart());
  try {
    const response = await URL.post("/auth/logIn", user);
    localStorage.setItem("user", JSON.stringify(response.data));
   console.log(response);
    dispatch(logInSuccess(response.data));
    navigate("/");
  } catch (error) {
    dispatch(logInFailure());
  }
};

export const signUp = async (dispatch, user, navigate) => {
  dispatch(signUpStart());
  try {
    await URL.post("/auth/signUp", user);
    dispatch(signUpSuccess());
    navigate("/logIn");
  } catch (error) {
    dispatch(signUpFailure());
  }
};

export const getProducts = async (cat, type) => {
  console.log({ cat, type });
  try {
    const res = await axios.get(
      cat
        ? `http://localhost:3001/products?catagory=${cat}`
        : type
        ? `http://localhost:3001/products?type=${type}`
        : "http://localhost:3001/products"
    );
    return res.data;
  } catch (err) {}
};

export const getProduct = async (productId) => {
  try {
    const res = await axios.get(`http://localhost:3001/products/${productId}`);
    return res.data;
  } catch (err) {}
};

export const handleCeckout = async (orders) => {
  try {
    const message = orders.map((order) => ({
      Name: order.item.title,
      quantity: order.quantity,
    }));

    await axios.post(
      `https://api.telegram.org/bot5851380501:AAHG3vKVw_3-IZdNijM2sPVREL9hDCG50cU/sendMessage?chat_id=-1001840670969&text=order : ${JSON.stringify(
        message
      )} location : "addis Ababa,gotera `
    );
  } catch (error) {
    console.log(error);
  }
};

export const handleCheckout = async () => {
  try {
    // const ans = await axios.post(
    //  "http://localhost:30325/api/user/Auth/login",

    //   {
    //     email: "user@example.com",
    //     password: "string",
    //   }
    // );

    // console.log(ans.data.user.documents[1].filePath);

    const ans = await fetch("https://api.chapa.co/v1/transaction/initialize", {
      method: "POST",
      body: JSON.stringify({
        amount: "100",
        currency: "ETB",
        email: "abebe@bikila.com",
        first_name: "Abebe",
        last_name: "Bikila",
        tx_ref: "tx-myecommerce12345",
        callback_url: "https://chapa.co",
        "customization[title]": "I love e-commerce",
        "customization[description]": "It is time to pay",
      }),
      headers: {
        "mode":"no-cors",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        Authorization: "Bearer CHASECK_TEST-xZeFlOlY2h7uLCS1ZWX3eykFqS22fXPL",
      },
    });

    // ans.header("Access-Control-Allow-Origin", "*");
    // ans.header(
    //   "Access-Control-Allow-Headers",
    //   "Origin, X-Requested-With, Content-Type, Accept"
    // );

     console.log(ans);

    // const message = orders.map((order) => ({
    //   Name: order.item.title,
    //   quantity: order.quantity,
    // }));
    // const ans = await axios.post(
    //   "http://api.chapa.co/v1/transaction/initialize",
    //   {
    //     amount: "100",
    //     currency: "ETB",
    //     email: "abebe@bikila.com",
    //     first_name: "Abebe",
    //     last_name: "Bikila",
    //     tx_ref: "tx-myecommerce12345",
    //     callback_url: "https://chapa.co",
    //     "customization[title]": "I love e-commerce",
    //     "customization[description]": "It is time to pay",
    //   },
    //   {

    //     headers: {
    //       Authorization: "CHASECK_TEST-xZeFlOlY2h7uLCS1ZWX3eykFqS22fXPL",
    //     },
    //   }
    // );
    // console.log(ans);
    // await axios.post(
    //   `https://api.telegram.org/bot5851380501:AAHG3vKVw_3-IZdNijM2sPVREL9hDCG50cU/sendMessage?chat_id=-1001840670969&text=order : ${JSON.stringify(
    //     message
    //   )} location : "addis Ababa,gotera `
    // );
  } catch (error) {
    console.log(error);
  }
};
