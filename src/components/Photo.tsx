"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
const Photo = () => {
  return (
    <div className="w-full h-full relative">    
        
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* imagine  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] absolute"
        >
          <Image
            src="/assets/sageAva.jpg"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain xl:ml-2 xl:mt-2"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="3"
            y="3"
            width="410"
            height="410"
            stroke="#26bc9d"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }} 
            animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [0, 0], // Giữ nguyên hình vuông, không xoay
              }}
              transition={{
                duration: 10, // Tốc độ viền di chuyển quanh hình vuông
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
