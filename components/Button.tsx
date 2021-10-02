import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props): ReactElement {
  return (
    <button>
      {children}

      <style jsx>{`
        button {
          font-size: 14px;
          padding: 10px 30px;
          background-color: var(--color-primary);
          color: #fff;
          border-radius: 8px;
          border: 1px dotted var(--color-primary);
          transition: all 200ms ease-in-out;
          cursor: pointer;
          text-transform: uppercase;
        }

        button:hover {
          color: #9ab958;
          background: transparent;
          border: 1px dotted #9ab958;
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </button>
  );
}
