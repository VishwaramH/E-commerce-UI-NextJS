import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import Product from "./product";

const StyledHeader = styled(Typography)((theme) => ({
  fontSize: 24,
  fontWeight: 600,
  margin: "3rem 0",
  textAlign: "center",
}));

export const StyledGrid = styled(Grid)((theme) => ({
  display: "flex",
  justifyContent: "center",
}));

function Productcard({ products }) {
  return (
    <>
      <StyledHeader variant="h6" component="div">
        List of Products
      </StyledHeader>
      <Grid container spacing={3}>
        {products.map((product) => (
          <StyledGrid item xs={12} sm={6} md={4} key={product.id}>
            <Product product={product} />
          </StyledGrid>
        ))}
      </Grid>
    </>
  );
}

export default Productcard;
