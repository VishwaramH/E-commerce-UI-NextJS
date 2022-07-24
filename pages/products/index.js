import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import Product from "../../components/product";
import Productcard from "../../components/productcards";
import { PRODUCTS_API } from "../../utils/constants";

function Products({ products }) {
  {
    console.log(products);
  }

  return (
    <>
      <Productcard products={products} />
    </>
  );
}

export default Products;

export async function getStaticProps() {
  const response = await fetch(PRODUCTS_API);
  let productsList = await response?.json();
  productsList = productsList?.products;
  console.log({ productsList });
  return {
    props: {
      products: productsList,
    },
  };
}
