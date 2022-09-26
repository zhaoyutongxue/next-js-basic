import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/laptop.jpg" width={160} height={100} alt="burgers photo" />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Project List</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
