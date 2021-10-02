import { ReactElement, useEffect, useState } from "react";

import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import classNames from "classnames";

export default function NavBar(): ReactElement {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () =>
      setSticky(document.documentElement.scrollTop > 0);
    document.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [setSticky]);

  return (
    <nav className={classNames({ sticky })}>
      <Container>
        <div className="navContent">
          <Link href={"/"}>
            <a className="logo">
              <Image src={Logo} alt="Twindove logo" height="27" width="112" />
            </a>
          </Link>
          <div className="rightStruct">
            <ul>
              <li>
                <a href="#hero-area">Home</a>
              </li>
              <li>
                <a href="#pricing">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 50px;
          z-index: 999;
          transition: all 200ms ease-in-out;
        }

        .sticky {
          background-color: #fff;
          box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
        }

        .navContent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        ul {
          display: flex;
          align-items: center;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        li {
          padding: 12.5px 0.75rem;
          line-height: 25px;
          font-size: 14px;
          height: 100%;
        }

        a {
          text-decoration: none;
          color: #fff;
          transition: color 200ms ease-in-out;
        }

        .sticky a {
          color: #585b60;
        }

        li:hover a {
          color: var(--color-primary);
        }
      `}</style>
    </nav>
  );
}
