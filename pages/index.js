"use client";
import { Inter } from "next/font/google";
import GroupPoster from "@/components/GroupPoster";
import Profile from "@/components/Profile";
import User from "@/components/User";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <GroupPoster />
      <User /> */}
      <Navbar />
    </main>
  );
}
