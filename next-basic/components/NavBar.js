import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/burgers.png" width={128} height={120} />
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
