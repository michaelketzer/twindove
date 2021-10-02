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
          align-items: center;
          flex-direction: column;
        }

        .col {
          padding: 0 15px;
        }

        @media only screen and (min-width: 990px) {
          .row {
            flex-direction: row;
          }

          .col {
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
}
