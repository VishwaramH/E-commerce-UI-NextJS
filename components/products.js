import { Button, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PRODUCTS_API } from "../utils/constants";
import Productcard from "./productcards";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const ViewAllButton = styled(Button)((theme) => ({
  float: "right",
  marginTop: "0.5rem",
}));
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${PRODUCTS_API}?limit=3`);
      let productsList = await response?.json();
      productsList = productsList?.products;
      console.log({ productsList });
      setProducts(productsList);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <Productcard products={products} />
      <Link href="/products">
        <ViewAllButton
          color="primary"
          size="large"
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
        >
          View All Products
        </ViewAllButton>
      </Link>
    </>
  );
}

export default Products;
