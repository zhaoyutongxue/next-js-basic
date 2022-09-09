import styles from "../../styles/Ninjas.module.css";
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
          <div key={ninja.id}>
            <a className={styles.ninja}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
