import Container from "../components/Container";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer>
      <Container>
        <div className="info">
          Copyright © 2021{" "}
          <a rel="nofollow" href="https://twindove.com.ng">
            Twindove
          </a>{" "}
          All Right Reserved
        </div>
      </Container>

      <style jsx>{`
        footer {
          border-top: 1px solid #d5d4e9;
          padding: 15px 0;
          margin: 45px 0 0;
        }

        .info {
          text-align: center;
          line-height: 42px;
          color: #333;
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: var(--color-primary);
        }
      `}</style>
    </footer>
  );
}
