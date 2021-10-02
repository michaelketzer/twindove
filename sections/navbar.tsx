import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import { ReactElement } from "react";

export default function NavBar(): ReactElement {
  return (
    <nav>
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
          background-color: #fff;
          box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
          z-index: 999;
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
          color: #fff;
          height: 100%;
        }

        a {
          text-decoration: none;
          color: #585b60;
          transition: color 150ms ease-in-out;
        }

        li:hover a {
          color: var(--color-primary);
        }
      `}</style>
    </nav>
  );
}
