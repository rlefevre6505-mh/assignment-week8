import Link from "next/link";

export default function Footer() {
  return (
    <footer className="@apply fixed bottom-0 inset-x-0 ">
      <nav className="@apply flex flex-row grow justify-evenly items-center w-full h-16 absolute bottom-0 ">
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/posts">
          View blog feed
        </Link>
        <Link className="link" href="/about">
          About
        </Link>
      </nav>
    </footer>
  );
}
