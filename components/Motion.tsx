import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

import { useAnimation } from "framer-motion";

type Direction = "top" | "right" | "bottom" | "left";

interface Props {
  children: ReactNode;
  inView: boolean;
  from: Direction;
  className?: string;
  delay?: number;
}

const variantMap: Record<Direction, Variants> = {
  top: {
    hidden: { opacity: 0, y: -50 },
    view: { opacity: 1, y: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    view: { opacity: 1, x: 0 },
  },
  bottom: {
    hidden: { opacity: 0, y: 50 },
    view: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    view: { opacity: 1, x: 0 },
  },
};

export default function Motion({
  children,
  inView,
  from,
  className,
  delay,
}: Props): ReactElement {
  const animation = useAnimation();
  const [visible, setVisible] = useState(inView);
  useEffect(() => {
    setVisible((s) => inView || s);
  }, [inView]);
  useEffect(() => {
    if (visible) {
      animation.start("view");
    }
  }, [animation, visible]);

  return (
    <motion.div
      variants={variantMap[from]}
      initial={"hidden"}
      animate={animation}
      transition={{ delay, duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
