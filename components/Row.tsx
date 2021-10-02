import { Children, ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Row({ children }: Props): ReactElement {
  return (
    <div className="row">
      {Children.map(children, (child, idx) => (
        <div key={idx} className={"col"}>
          {child}
        </div>
      ))}

      <style jsx>{`
        .row {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .col {
          padding: 0 15px;
        }
      `}</style>
    </div>
  );
}
