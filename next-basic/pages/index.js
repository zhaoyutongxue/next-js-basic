import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cupiditate nisi obcaecati
        ratione laudantium consequuntur dolores, itaque fugit quae harum, debitis voluptas vel. Ab
        non sit mollitia repellendus eveniet vel.
      </p>
      <Link href={"./ninjas"}>
        <a className={styles.btn}>See Ninjas</a>
      </Link>
    </div>
  );
}
