import Button from "../components/Button";
import Image from "next/image";
import Motion from "../components/Motion";
import { ReactElement } from "react";
import Row from "../components/Row";
import SectionContainer from "../components/SectionContainer";
import Tractor from "../public/tractor.png";
import { useInView } from "react-intersection-observer";

export default function About(): ReactElement {
  const [ref, inView] = useInView();

  return (
    <SectionContainer id="about" sectionTitle="About Twindove" ref={ref}>
      <Row>
        <Motion from="right" inView={inView}>
          <Image src={Tractor} alt="Tractor images, twindove tractors" />
        </Motion>

        <Motion from="left" inView={inView}>
          <div className="content">
            <p>
              Twindove Nigeria Limited was established in 2018. The business
              operate and provide services, solutions in transport, logistics,
              warehousing and related Agricbusiness. Our operations activity are
              within the required obligation under the heavy vehicle law and
              warehousing regulations.
            </p>
            <p>
              All our vehicles and warehousing facilities are insured. Our staff
              are trained to carry out activity in compliance with applicable
              regulations and law within the business operations. Understanding
              your business needs and requirement ts to tailor you the most cost
              effective and reliable solutions is our pride.
            </p>
            <a href="#">
              <Button>Read More</Button>
            </a>
          </div>
        </Motion>
      </Row>

      <style jsx>{`
        p {
          margin-bottom: 30px;
        }

        p:last-child {
          margin-bottom: 45px;
        }
      `}</style>
    </SectionContainer>
  );
}
