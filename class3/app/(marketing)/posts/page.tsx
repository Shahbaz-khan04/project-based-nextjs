"use client";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Posts() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Posts.</h1>
      </div>
      <Link href="/">Go to Home.</Link>
      {/* If we want to use button for linking then we will first import { useRouter } then initialize it ij a variable, 
      
      <button type="button" onClick={() => router.push("/")}>
        Home Page.
      </button> */}
    </main>
  );
}
