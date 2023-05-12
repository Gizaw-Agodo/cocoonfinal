import { setIsModal, updateProductStart } from "../../redux/productRedux";
import {getStorage,ref,uploadBytesResumable,getDownloadURL,} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { updateProduct } from "../../api";
import app from "../../firebase";
import { useState } from "react";
import "./updateProduct.css";

export default function Product() {
  const { isFetching, isModal } = useSelector((state) => state.product);
  const productId = useLocation().pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(product);
  const [file, setFile] = useState(null);

  // handling change
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      dispatch(updateProductStart());
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            const product = { ...inputs, img: downloadURL };
            updateProduct(product._id, product, dispatch);
            setTimeout(function () {
              dispatch(setIsModal());
            }, 5000);
          });
        }
      );
    } else {
      updateProduct(product._id, inputs, dispatch);
      setTimeout(function () {
        dispatch(setIsModal());
      }, 5000);
    }
  };

  return isFetching ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <div className="product">
      <h3>update product</h3>
      {isModal && (
        <h5 style={{ color: "green", fontFamily: "Poppins" }}>
          product Sucessfuly updated
        </h5>
      )}
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            
            <label>Product Name</label>
            <input
              type="text"
              name="title"
              defaultValue={product.title}
              style={{ width: "300px" }}
              onChange={(e) => handleChange(e)}
            />
            <label>Product Description</label>
            <input
              type="text"
              name="desc"
              defaultValue={product.desc}
              onChange={(e) => handleChange(e)}
            />
            <label>Price</label>
            <input
              type="number"
              name="price"
              defaultValue={product.price}
              onChange={handleChange}
            />

            <label>Catagory</label>
            <input
              type="text"
              name="catagory"
              defaultValue={product.catagory}
              onChange={handleChange}
            />

            <label>Type</label>
            <input
              type="text"
              name="type"
              defaultValue={product.type}
              onChange={handleChange}
            />
          </div>

          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file" style={{ cursor: "pointer" }}>
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <h6 style={{ textAlign: "center", marginTop: "0px" }}>
                {file?.name}
              </h6>
            </div>
            <button className="productButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
