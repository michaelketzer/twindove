import Button from "../components/Button";
import Image from "next/image";
import { ReactElement } from "react";
import Row from "../components/Row";
import SectionContainer from "../components/SectionContainer";
import Tractor from "../public/tractor.png";

export default function About(): ReactElement {
  return (
    <SectionContainer id="about" sectionTitle="About Twindove">
      <Row>
        <Image src={Tractor} alt="Tractor images, twindove tractors" />

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
