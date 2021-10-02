import { ReactElement } from "react";

export default function Location(): ReactElement {
  return (
    <section id="location">
      <iframe
        loading="lazy"
        width="100%"
        height="300"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=No.%20D2%20Yahaya%20Aminu%20Shopping%20Complex,Kofan%20Doka,%20Zaria,%20Kaduna%20state.&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      />
    </section>
  );
}
