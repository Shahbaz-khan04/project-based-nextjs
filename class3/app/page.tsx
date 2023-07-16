import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./page.module.css";
import { posts } from "../data/posts";

const inter = Inter({ subsets: ["latin"] });

type Posts = {
  id: string;
  title: string;
  date: string;
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Home.</h1>
      </div>
      <div>
        {/* Below outer curly braces are used which says that we are using javascript expression. */}
        {posts.map(({ id, title, date }: Posts) => (
          <>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <p>{date}</p>
            <br />
          </>
        ))}
      </div>
      <Link href="/posts">Go to Posts.</Link>
      <Link href="/account">Go to Accounts.</Link>
    </main>
  );
}
