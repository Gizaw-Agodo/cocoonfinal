import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline } from "@material-ui/icons";
import { deleteProduct, getProducts } from "../../api/index";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productList.css";
import { CircularProgress } from "@material-ui/core";
import Modal from "../modal/Modal";

export default function ProductList() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isFetching = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  // deleting product
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 350,
      renderCell: (params) => {
        return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.title}
            </div>
         
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
              // onClick={() => setOpenModal(true)}
            >
              {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
            </DeleteOutline>
          </>
        );
      },
    },
  ];

  return !isFetching ? (
    <CircularProgress />
  ) : (
    <div className="productList">
      <div className="productTitleContainer">
        <h3 className="productTitle">Products</h3>
        <Link to="/newproduct">
          <button className="productAddButton">Create New</button>
        </Link>
      </div>
      <DataGrid
        style={{ border: "1px solid black" }}
        showCellRightBorder
        showColumnRightBorder
        rows={products}
        columns={columns}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        pageSize={28}
        checkboxSelection
      />
    </div>
  );
}
