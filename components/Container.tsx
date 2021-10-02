import { ReactElement, ReactNode, RefObject, forwardRef } from "react";

interface Props {
  children: ReactNode;
}

export default forwardRef(function Container(
  { children }: Props,
  ref: RefObject<HTMLDivElement>
): ReactElement {
  return (
    <div className="responsiveContainer" ref={ref}>
      {children}

      <style jsx>{`
        .responsiveContainer {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 10px;
          height: 100%;
        }
      `}</style>
    </div>
  );
});
