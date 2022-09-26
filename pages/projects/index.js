import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Home = ({ ninjas }) => {
  return (
    <div>
      <h2>Here are all the Ninjas</h2>
      {ninjas.map((ninja) => {
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <div>
              <a className={styles.ninja}>
                <h3>{ninja.name}</h3>
              </a>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
