import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooo ps...</h1>
      <h2>Page is not found</h2>

      <p>
        Back to the
        <Link href="/">
          <a> Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
