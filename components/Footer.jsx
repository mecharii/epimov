import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-3 px-2 max-w-screen-xl mx-auto text-center">
      <span>Created By </span>
      <Link
        href="https://github.com/furkantaglik"
        className="hover:text-red-500"
      >
        Furkan Tağlık
      </Link>
    </footer>
  );
};

export default Footer;
