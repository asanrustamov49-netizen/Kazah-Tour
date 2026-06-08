import Link from "next/link";
import scss from "./header.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <img src="./image 1.png" alt="" />
          <nav>
            <Link href="/">HOME</Link>
            <Link href="/">ABOUT</Link>
            <Link href="/">TOURS</Link>
            <Link href="/">CONTACTS</Link>
          </nav>
          <div className={scss.sign}>
            <span>
              <IoSearchOutline />
            </span>
            <span>
              <FiUser />
            </span>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
