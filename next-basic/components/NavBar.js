import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Ninja list</h1>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninja List</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
