import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="keywords" content="whatever keyword in here" />
      </Head>
      <h1 className={styles.title}>Home page</h1>
      <h2>Hi! I am Henry, an engineer who wants to get things done. </h2>

      <Link href={"./ninjas"}>
        <a className={styles.btn}>See Projects</a>
      </Link>
    </div>
  );
}
