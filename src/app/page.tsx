import Image from "next/image";
import Link from "next/link";

export default function app() {
  return (
    <>
      <p>Main file</p>
      <div className="nav-links">
        <Link className="links" href="/Home">Home</Link>
        <Link className="links" href="/About">About</Link>
        <Link className="links" href="/Dashboard">Dashboard</Link>
        <Link className="links" href="/Products">Products</Link>
        <Link className="links" href="/SignIn">SignIn</Link>
      </div>
    </>
  );
}
