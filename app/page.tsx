"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Herosection from "./_component/herosection";
import MainContent from "./_component/MainContent";
import MultiFollowCursor from "./_component/MultiFollowCursor";


export default function Home() {
  return (
   <>
    <Herosection />
    <MainContent/>
    <MultiFollowCursor />
   </>
  );
}
