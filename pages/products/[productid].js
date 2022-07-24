import { Grid, styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import { StyledGrid } from "../../components/productcards";
import { PRODUCTS_API } from "../../utils/constants";
import Rating from "@mui/material/Rating";

const StyledDiv = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "column",
  margin: 20,
}));

const StyledImage = styled("img")((theme) => ({
  margin: 20,
  cursor: "pointer",
  opacity: 0.5,
  "&:hover": {
    opacity: 1,
    border: "1px solid red",
  },
}));

const StyledGridInfo = styled(Grid)((theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

function ProductInfo({ products }) {
  const router = useRouter();
  const productId = router.query.productid;
  const [isActive, setIsActive] = useState(false);
  const productInfo = products?.filter(
    (product) => product.id === Number(productId)
  )[0];
  const [imageIndex, setImageIndex] = useState(0);
  const handleImageChange = (event, index) => {
    setImageIndex(index);
    if (event.currentTarget.style.border === "1px solid red") {
      event.currentTarget.style.border = "none";
      event.currentTarget.style.opacity = 0.5;
    } else {
      event.currentTarget.style.border = "1px solid red";
      event.currentTarget.style.opacity = 1;
    }
  };
  useEffect(() => {
    console.log(productInfo);
  }, [productInfo]);
  return (
    <>
      <Grid container spacing={3}>
        <StyledGrid item xs={12} md={2}>
          <StyledDiv>
            {productInfo?.images?.map((image, index) => (
              <StyledImage
                key={index}
                src={image}
                height="100"
                width="100"
                onClick={(e) => handleImageChange(e, index)}
              />
            ))}
          </StyledDiv>
        </StyledGrid>
        <StyledGrid style={{ marginTop: 40 }} item xs={12} md={5}>
          <img
            key={imageIndex}
            src={productInfo?.images[imageIndex]}
            height="100%"
            width="100%"
          />
        </StyledGrid>
        <StyledGridInfo item xs={12} md={5}>
          <Typography variant="h6">
            {productInfo?.title} - {productInfo?.brand} brand
          </Typography>
          <div>{productInfo?.description}</div>
          <Rating
            name="read-only"
            readOnly
            defaultValue={productInfo?.rating}
            max={5}
          />
          <Typography variant="h4">
            ₹
            {(
              productInfo?.price -
              (productInfo?.discountPercentage / 100) * productInfo?.price
            ).toFixed(2)}{" "}
            <span
              style={{
                textDecoration: "line-through",
                fontSize: 24,
                fontWeight: "normal",
              }}
            >
              ₹{productInfo?.price}
            </span>
          </Typography>
          <p style={{ color: "green" }}>
            {productInfo?.discountPercentage}% off
          </p>
          <p>Number of pieces available: {productInfo?.stock}</p>
        </StyledGridInfo>
      </Grid>
    </>
  );
}

export default ProductInfo;

export async function getServerSideProps() {
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
