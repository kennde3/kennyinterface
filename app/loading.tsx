"use client";
import { motion } from "framer-motion";

const text = "Loading...";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.h1
        initial={{ backgroundSize: "0% 100%" }}
        animate={{ backgroundSize: "100% 100%" }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
