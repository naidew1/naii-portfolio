import { CMarquee } from "../base/Marquee";

export default function Services() {
  return (
    <section id="services" className="mt-6 w-full rounded-md bg-card-dark p-4">
      <h5 className="text-xl font-semibold text-typography-dark">
        Ready To Go Services
      </h5>
      <CMarquee />
    </section>
  );
}
