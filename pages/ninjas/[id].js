// telling next js what pages to build:
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await res.json();
  //  path is an array of objects that will tell NextJS what pages to build at build time.
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// pump in the single ninja object for each of the page
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  // each ninja data
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Detail page</h1>
      <h3>{ninja.name}</h3>
      <p>{ninja.email}</p>
    </div>
  );
};

export default Details;
