import { ReactElement, ReactNode } from "react";

import Container from "./Container";
import classNames from "classnames";

interface Props {
  alternate?: boolean;
  id: string;
  sectionTitle: string;
  children: ReactNode;
}

export default function SectionContainer({
  alternate,
  children,
  id,
  sectionTitle,
}: Props): ReactElement {
  return (
    <section id={id} className={classNames({ alternate })}>
      <Container>
        <h2>{sectionTitle}</h2>
        {children}
      </Container>

      <style jsx>{`
        section {
          padding: 60px 0;
        }

        .alternate {
          background-color: #e6f0d0;
        }

        h2 {
          font-size: 30px;
          color: #222;
          margin: 0 auto;
          font-weight: 700;
          position: relative;
          text-align: center;
          margin-bottom: calc(30px + 0.5rem);
        }

        h2:after {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 1px;
          width: 60px;
          background-color: var(--color-primary);
          content: " ";
          bottom: -0.5rem;
        }
      `}</style>
    </section>
  );
}
