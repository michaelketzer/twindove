import { ReactElement, useEffect, useState } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
}

const variants = {
  hidden: { opacity: 0 },
  view: { bottom: 0, opacity: 1 },
};

export default function SectionTitle({ title }: Props): ReactElement {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible((v) => inView || v);
  }, [inView]);

  return (
    <h2 ref={ref} className={classNames({ inView })}>
      {title}

      <motion.span
        className="border"
        variants={variants}
        initial={"hidden"}
        animate={visible ? "view" : "hidden"}
        transition={{ duration: 0.75 }}
      />

      <style jsx>{`
        h2 {
          font-size: 30px;
          color: #222;
          margin: 0 auto;
          font-weight: 700;
          position: relative;
          text-align: center;
          margin-bottom: calc(30px + 0.5rem);
          padding-bottom: 0.5rem;
        }

        h2 :global(.border) {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 1px;
          width: 60px;
          background-color: var(--color-primary);
          bottom: 2rem;
        }
      `}</style>
    </h2>
  );
}
