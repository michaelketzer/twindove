import Button from "../components/Button";
import Container from "../components/Container";
import { ReactElement } from "react";

export default function Hero(): ReactElement {
  return (
    <section id="hero-area">
      <Container>
        <h1>Are you looking for Agricultural Solutions ?</h1>
        <h2>We specialize in Tractors/trucks/grains/warehousing</h2>
        <div className="info">We deliver faster</div>
        <div className="header-button">
          <a rel="nofollow" href="#contact">
            <Button>Contact us</Button>
          </a>
        </div>
      </Container>

      <style jsx>{`
        section {
          min-height: 650px;
          position: relative;
          overflow: hidden;
          padding: 220px 0 80px;
        }

        h1 {
          margin-top: 0;
          color: #fff;
          font-size: 42px;
          font-weight: 700;
          line-height: 60px;
          margin-bottom: 2.5rem;
        }
        h2 {
          font-size: 1.6rem;
          color: #9ab958;
        }
        .info {
          margin: 0;
          font-size: 14px;
          color: #ddd;
        }
        .header-button {
          margin-top: 2rem;
          color: #222;
        }
        .header-button .btn {
          margin-right: 10px;
        }
      `}</style>
    </section>
  );
}
