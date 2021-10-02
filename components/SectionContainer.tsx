import { ReactElement, ReactNode, RefObject, forwardRef } from "react";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import classNames from "classnames";

interface Props {
  alternate?: boolean;
  id: string;
  sectionTitle: string;
  children: ReactNode;
}

export default forwardRef(function SectionContainer(
  { alternate, children, id, sectionTitle }: Props,
  ref: RefObject<HTMLDivElement>
): ReactElement {
  return (
    <section id={id} className={classNames({ alternate })}>
      <Container ref={ref}>
        <SectionTitle title={sectionTitle} />
        {children}
      </Container>

      <style jsx>{`
        section {
          padding: 60px 0;
        }

        .alternate {
          background-color: #e6f0d0;
        }
      `}</style>
    </section>
  );
});
