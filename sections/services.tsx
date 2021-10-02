import Motion from "../components/Motion";
import { ReactElement } from "react";
import SectionContainer from "../components/SectionContainer";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: (
      <svg
        width="37"
        viewBox="0 0 640 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M624 352H608V243.9C608 231.2 602.9 219 593.9 210L494 110.1C485 101.1 472.8 96 460.1 96H416V48C416 21.5 394.5 0 368 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H64C64 469 107 512 160 512C213 512 256 469 256 416H384C384 469 427 512 480 512C533 512 576 469 576 416H624C632.8 416 640 408.8 640 400V368C640 359.2 632.8 352 624 352ZM160 464C133.5 464 112 442.5 112 416C112 389.5 133.5 368 160 368C186.5 368 208 389.5 208 416C208 442.5 186.5 464 160 464ZM480 464C453.5 464 432 442.5 432 416C432 389.5 453.5 368 480 368C506.5 368 528 389.5 528 416C528 442.5 506.5 464 480 464ZM560 256H416V144H460.1L560 243.9V256Z"
          fill="currentColor"
        />
      </svg>
    ),
    headline: "TRUCKS",
    description:
      "Our local trucks fleet operate throughout the country, offering day and night delivering of goods.",
    delay: 0,
  },
  {
    icon: (
      <svg
        width="37"
        viewBox="0 0 640 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M528 336C479.4 336 440 375.4 440 424C440 472.6 479.4 512 528 512C576.6 512 616 472.6 616 424C616 375.4 576.6 336 528 336ZM528 448C514.77 448 504 437.23 504 424C504 410.77 514.77 400 528 400C541.23 400 552 410.77 552 424C552 437.23 541.23 448 528 448ZM608 160H544V119.8C544 105.68 548.7 92.04 557.15 80.96C561.57 75.16 560.7 66.9 555.83 61.47L534.2 37.3C527.54 29.85 515.88 30.38 509.5 38.08C490.58 60.9 480 89.81 480 119.8V160H377.67L321.58 29.14C317.895 20.4883 311.746 13.1121 303.899 7.93041C296.052 2.74874 286.854 -0.00927974 277.45 -7.21348e-06H144C117.53 -7.21348e-06 96 21.53 96 48V194.52C87.37 187.79 75.04 188.06 67.11 195.99L36 227.1C27.41 235.69 27.41 249.62 36 258.21L41.06 263.27C36.07 272.53 32.1 282.09 29.15 291.99H22C9.85 291.99 0 301.84 0 313.99V357.99C0 370.14 9.85 379.99 22 379.99H29.14C32.1 389.9 36.06 399.45 41.05 408.72L35.99 413.78C27.4 422.37 27.4 436.3 35.99 444.89L67.1 476C75.69 484.59 89.62 484.59 98.21 476L103.27 470.94C112.53 475.93 122.09 479.9 131.99 482.85V490C131.99 502.15 141.84 512 153.99 512H197.99C210.14 512 219.99 502.15 219.99 490V482.86C229.89 479.91 239.45 475.94 248.71 470.95L253.77 476.01C262.36 484.6 276.29 484.6 284.88 476.01L315.99 444.9C324.58 436.31 324.58 422.38 315.99 413.79L310.93 408.73C315.92 399.47 319.89 389.91 322.84 380.01H330C342.15 380.01 352 370.16 352 358.01V352.01H432.54C454.45 323.02 488.86 304.01 528 304.01C546.64 304.01 564.07 308.62 579.8 316.21L630.62 265.39C636.62 259.39 639.99 251.25 639.99 242.76V192C640 174.33 625.67 160 608 160ZM176 416C131.82 416 96 380.18 96 336C96 291.82 131.82 256 176 256C220.18 256 256 291.82 256 336C256 380.18 220.18 416 176 416ZM198 160H160V64H266.89L308.04 160H198Z"
          fill="currentColor"
        />
      </svg>
    ),
    headline: "TRACTORS",
    description:
      "Our tractors and planters are least out to farming cooperatives, large scale farmers and companies.",
    delay: 0.4,
  },
  {
    icon: (
      <svg
        width="37"
        viewBox="0 0 640 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M504 352H136.4C132 352 128.4 355.6 128.4 360L128.3 408C128.3 412.4 131.9 416 136.3 416H504C508.4 416 512 412.4 512 408V360C512 355.6 508.4 352 504 352ZM504 448H136.1C131.7 448 128.1 451.6 128.1 456L128 504C128 508.4 131.6 512 136 512H504C508.4 512 512 508.4 512 504V456C512 451.6 508.4 448 504 448ZM504 256H136.6C132.2 256 128.6 259.6 128.6 264L128.5 312C128.5 316.4 132.1 320 136.5 320H504C508.4 320 512 316.4 512 312V264C512 259.6 508.4 256 504 256ZM610.5 117L338.4 3.7C332.551 1.27379 326.282 0.0249329 319.95 0.0249329C313.618 0.0249329 307.349 1.27379 301.5 3.7L29.5 117C11.7 124.5 0 141.9 0 161.3V504C0 508.4 3.6 512 8 512H88C92.4 512 96 508.4 96 504V256C96 238.4 110.6 224 128.6 224H511.4C529.4 224 544 238.4 544 256V504C544 508.4 547.6 512 552 512H632C636.4 512 640 508.4 640 504V161.3C640 141.9 628.3 124.5 610.5 117V117Z"
          fill="currentColor"
        />
      </svg>
    ),
    headline: "WAREHOUSING",
    description:
      "We offer well insured warehouse facilities across for storage of farm produce and goods.",
    delay: 0.8,
  },
  {
    icon: (
      <svg
        width="37"
        viewBox="0 0 512 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64 64H0C0 187.7 100.3 288 224 288V432C224 440.8 231.2 448 240 448H272C280.8 448 288 440.8 288 432V288C288 164.3 187.7 64 64 64ZM448 0C363.8 0 290.6 46.5 252.3 115.2C280 145.4 300.5 182.1 311.3 222.8C424 211.1 512 115.9 512 0H448Z"
          fill="currentColor"
        />
      </svg>
    ),
    headline: "GRAINS",
    description:
      "We deliver the finest of grains such as: maize, soya beans, wheat, beans, rice and sorghum.",
    delay: 1.2,
  },
];

export default function Services(): ReactElement {
  const [ref, inView] = useInView();
  return (
    <SectionContainer
      id="services"
      sectionTitle="Our Services"
      alternate
      ref={ref}
    >
      <div className="container">
        <div className="info">
          We are devoted to offering quality service with speed, reliability and
          value you deserve.
        </div>

        <div className="grid">
          {services.map(({ icon, headline, description, delay }) => (
            <Motion
              from="right"
              inView={inView}
              key={headline}
              delay={delay}
              className="item"
            >
              <div className="icon">{icon}</div>
              <h3>{headline}</h3>
              <div className="description">{description}</div>
            </Motion>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 0 15px;
        }

        .info {
          text-align: center;
          font-size: 14px;
        }

        .grid {
          display: flex;
          grid-gap: 50px;
          padding-top: 50px;
          flex-direction: column;
        }

        .grid :global(.item) {
          padding: 20px 10px;
          background-color: #fff;
          text-align: center;
          border-radius: 0.75rem;
          box-shadow: 0 0 12px #e6f0d0;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 200ms ease-in-out;
        }

        .grid :global(.item:hover) {
          box-shadow: 0 10px 22px 10px rgba(27, 38, 49, 0.1);
        }

        .icon {
          border: 1px solid #f1f1f1;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          transition: all 200ms ease-in-out;
        }

        .icon :global(svg) {
          transition: fill 200ms ease-in-out;
        }

        h3 {
          color: #585b60;
          font-size: 14px;
          margin: 30px 0 10px 0;
        }

        .item:hover .icon {
          color: #fff;
          background-color: var(--color-primary);
        }

        .description {
          padding: 2rem;
          font-size: 14px;
        }

        @media only screen and (min-width: 990px) {
          .grid {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .grid :global(.item) {
            width: 45%;
          }
        }
      `}</style>
    </SectionContainer>
  );
}
