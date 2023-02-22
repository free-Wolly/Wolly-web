import React, { useEffect } from "react";
import { motion } from "framer-motion";

function splitImage(img: any, canvas: any, x: any, y: any, w: any, h: any) {
  const ctx = canvas.getContext("2d");

  // Draw the specified part of the original image onto the canvas
  ctx.drawImage(img, x, y, w, h, 0, 0, canvas.width, canvas.height);
}

function ImageSplitter({ src }: any) {
  useEffect(() => {
    // Get the original image element
    const img = document.querySelector("#video-image");

    // Get the canvas elements
    const canvas1: any = document.querySelector("#part1");
    const canvas2: any = document.querySelector("#part2");
    const canvas3: any = document.querySelector("#part3");
    const canvas4: any = document.querySelector("#part4");

    // Set the canvas dimensions to be equal to the original image dimensions
    const { width, height }: any = img;
    canvas1.width = canvas2.width = canvas3.width = canvas4.width = width / 2;
    canvas1.height =
      canvas2.height =
      canvas3.height =
      canvas4.height =
        height / 2;

    // Split the image into 4 parts
    splitImage(img, canvas1, 0, 0, width / 2, height / 2); // Top-left part
    splitImage(img, canvas2, width / 2, 0, width / 2, height / 2); // Top-right part
    splitImage(img, canvas3, 0, height / 2, width / 2, height / 2); // Bottom-left part
    splitImage(img, canvas4, width / 2, height / 2, width / 2, height / 2); // Bottom-right part
  }, [src]);

  return (
    <motion.div layoutId="main-image-1" className="w-[600px] h-[336px]">
      {/* Original image */}
      <motion.img
        id="video-image"
        className="hidden"
        src={src}
        alt="Original"
      />

      {/* Split image parts */}
      <motion.canvas
        initial={{ position: "absolute", top: "100%", left: "50%", opacity: 0 }}
        animate={{
          opacity: 0.8,
          top: "50%",
          left: "50%",
          transition: { delay: 1.5, duration: 1 },
        }}
        id="part4"
      />
      <motion.canvas
        initial={{
          position: "absolute",
          top: "100%",
          right: "50%",
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
          top: "50%",
          right: "50%",
          transition: { delay: 0.5, duration: 1 },
        }}
        id="part3"
      />
      <motion.canvas
        initial={{
          position: "absolute",
          bottom: "100%",
          left: "50%",
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
          bottom: "50%",
          left: "50%",
          transition: { delay: 1, duration: 1 },
        }}
        id="part2"
      />
      <motion.canvas
        initial={{
          position: "absolute",
          bottom: "100%",
          right: "50%",
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
          bottom: "50%",
          right: "50%",
          transition: { delay: 0, duration: 1 },
        }}
        id="part1"
      />
    </motion.div>
  );
}

export default ImageSplitter;
