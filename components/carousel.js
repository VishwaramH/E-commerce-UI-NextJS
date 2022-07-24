import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import { carouselData } from "../carouselData";

const StyledImageCard = styled(CardMedia)((theme) => ({
  width: "100%",
  maxWidth: "100%",
  height: "65vh",
  objectFit: "fill",
}));
function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        {carouselData?.map((data) => (
          <>
            <Grid item key={data.id} xs={12}>
              <StyledImageCard
                component="img"
                width="100%"
                image={data.image}
                alt="Paella dish"
              />
            </Grid>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
