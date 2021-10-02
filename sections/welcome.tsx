import Button from "../components/Button";
import Container from "../components/Container";
import { ReactElement } from "react";

export default function Welcome(): ReactElement {
  return (
    <section id="welcome">
      <Container>
        <div className="col">
          <h2>Welcome to Twindove</h2>
          <div className="info">
            Whether for home or business use, we’re are here to help you make
            that big move better, faster and cost efficient
          </div>
          <a rel="nofollow" href="#contact">
            <Button>Contact us</Button>
          </a>
        </div>
      </Container>

      <style jsx>{`
        section {
          padding: 60px 0;
          background-image: url(/twindove_bg.webp);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .col {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        h2 {
          text-align: center;
          color: #fff;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          margin: 0;
        }

        .info {
          margin: 4rem;
          color: #fff;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
