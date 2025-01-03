import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import { useState } from "react";
const ProductListing = () => {
  console.log("ProductListing");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   console.log("inside fetchProducts");
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });

  //   dispatch(setProducts(response.data));
  //   setLoading(false);
  //   // dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      {loading ? "Loading..." : <ProductComponent />}
    </div>
  );
};

export default ProductListing;
