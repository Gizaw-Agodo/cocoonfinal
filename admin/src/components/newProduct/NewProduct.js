import {getStorage,ref,uploadBytesResumable,getDownloadURL,} from "firebase/storage";
import { createProductStart, setIsModal } from "../../redux/productRedux";
import imgPlaceholder from "../../assets/placeholder.png";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import { createProduct } from "../../api";
import app from "../../firebase";
import { useState } from "react";
import "./newProduct.css";


export default function NewProduct() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const { isFetching,isModal} = useSelector((state) => state.product);
 
  // handling change
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    dispatch(createProductStart());
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL };
          createProduct(product, dispatch);
          setTimeout(function () {
            dispatch(setIsModal());
          }, 5000);
        });
      }
    );
  };

  return isFetching ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex:2
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <div className="product">
      <h3>create product</h3>
      {isModal && (
        <h5 style={{ color: "green", fontFamily: "Poppins" }}>
          product Sucessfuly created
        </h5>
      )}
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              name="title"
              style={{ width: "300px" }}
              onChange={handleChange}
            />
            <label>Product Description</label>
            <input type="text" name="desc" onChange={handleChange} />
            <label>Price</label>
            <input type="number" name="price" onChange={handleChange} />
            <label>Catagory</label>
            <input type="text" name="catagory" onChange={handleChange} />
            <label>Type</label>
            <input type="text" name="type" onChange={handleChange} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={imgPlaceholder} alt="" className="productUploadImg" />
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
