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
      <p className={styles.text}>This is the place where you can show on the home page. </p>
      <Link href={"./ninjas"}>
        <a className={styles.btn}>See Ninjas</a>
      </Link>
    </div>
  );
}
