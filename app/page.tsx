import { AboutFragment } from "./fragments/about";
import { ExperienceFragment } from "./fragments/experience";
import { PortafolioFragment } from "./fragments/portafolio";

export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 md:py-10 h-screen">
      <PortafolioFragment/>
      </section>
    <section id="acerca" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen ">
      <AboutFragment/>
    </section>
    <section id="experiencia" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen">
      <ExperienceFragment/>
    </section>
    </>
  );
}
