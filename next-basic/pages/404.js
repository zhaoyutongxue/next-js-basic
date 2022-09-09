import Link from "next/link";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);
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
