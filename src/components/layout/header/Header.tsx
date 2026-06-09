"use client";

import Link from "next/link";
import scss from "./header.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const pathname = usePathname();
  const { push } = useRouter();

  const navRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      "[data-active='true']",
    ) as HTMLElement | null;

    if (activeLink && underlineRef.current) {
      const underline = underlineRef.current;

      underline.style.opacity = "1";
      underline.style.width = activeLink.offsetWidth + "px";
      underline.style.transform = `translateX(${activeLink.offsetLeft}px)`;
    } else if (underlineRef.current) {
      underlineRef.current.style.opacity = "0";
    }
  }, [pathname]);
  const handleLogin = () => {
    push("/login");
    setIsLogged(true);
  };


  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <img src="./image 1.png" alt="logo" />
          <nav className={scss.nav} ref={navRef}>
            <Link href="/" data-active={pathname === "/"}>
              HOME
            </Link>
            <Link href="/about" data-active={pathname === "/about"}>
              ABOUT
            </Link>
            <Link href="/tours" data-active={pathname === "/tours"}>
              TOURS
            </Link>
            <Link href="/contacts" data-active={pathname === "/contacts"}>
              CONTACTS
            </Link>
            <Link href="/admin" data-active={pathname === "/admin"}>
              ADMIN
            </Link>
            <span ref={underlineRef} className={scss.underline}></span>
          </nav>
          <div className={scss.sign}>
            <span>
              <IoSearchOutline />
            </span>
            <span>
              <FiUser />
            </span>
            <AnimatePresence>
              {!isLogged && (
                <motion.button
                  onClick={() => handleLogin()}
                  className={scss.signBtn}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Sign In
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
