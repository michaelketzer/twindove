import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props): ReactElement {
  return (
    <div className="responsiveContainer">
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
}
