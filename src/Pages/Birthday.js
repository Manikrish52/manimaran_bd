import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import img1 from "../components/Image/Image1.jpeg";
import img2 from "../components/Image/image2.jpeg";
import img3 from "../components/Image/image3.jpeg";
import img4 from "../components/Image/image5.jpg";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Grid from "@mui/material/Grid";

function Birthday() {

  const gallery = [
    {
      image: img1,
      text: "This is our beautiful birthday memory 🎉"
    },
    {
      image: img2,
      text: "A special day full of happiness 💖"
    },
    {
      image: img3,
      text: "Wonderful moments together ✨"
    },
    {
      image: img4,
      text: "Best birthday celebration ever 🎂"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "60px",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#ff9a9e,#fad0c4)"
      }}
    >

      {/* Confetti */}
     <Confetti
        width={size.width}
        height={size.height}
        numberOfPieces={200}
      />

      {/* Title */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "50px", color: "white", }}
      >
        🎂 Happy Birthday 🎂
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ color: "white" }}
      >
        Wishing you a day filled with love and joy 💖
      </motion.h2>

      {/* TEXT ABOVE IMAGE */}
      <motion.div
        key={index}
        style={{
          marginTop: "30px",
          fontSize: "22px",
          fontWeight: "bold",
          color: "#ff4081",
          background: "white",
          display: "inline-block",
          padding: "10px 20px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {gallery[index].text}
      </motion.div>

      {/* IMAGE SLIDER */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px"
        }}
      >

       

        {/* Image */}
        <motion.img
          key={index}
          src={gallery[index].image}
          style={{
            width: "320px",
            height: "320px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0px 15px 40px rgba(0,0,0,0.3)"
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
       

      </div>
 <Grid sx={{display:"flex", justifyContent:"space-around"}}> {/* Left Arrow */}
        <ArrowCircleLeftIcon
          onClick={prevImage}
          sx={{
            fontSize: 60,
            cursor: "pointer",
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#ff4081", transform: "scale(1.2)" }
          }}
        />
        {/* Right Arrow */}
        <ArrowCircleRightIcon
          onClick={nextImage}
          sx={{
            fontSize: 60,
            cursor: "pointer",
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#ff4081", transform: "scale(1.2)" }
          }}
        />
</Grid>
    </div>
  );
}

export default Birthday;