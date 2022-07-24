import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
import Products from "../components/products";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Products />
    </div>
  );
}
