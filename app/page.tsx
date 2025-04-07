import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { Linkedin } from "./icons";
import AboutFragment from "./fragments/about";
import ExperienceFragment from "./fragments/experience";

export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 md:py-10 h-screen">
      <div className="grid max-w-xl text-center justify-center place-items-center">
        <Image src="/assets/avatar.png" width={150} height={150} alt="Avatar" className="bg-white rounded-xl"/>
        <span className={title()}>Víctor Cordova Poma</span>
        <div className={subtitle({ class: "mt-4" })}>
          Desarrollador de software, estudiante y cantante.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.linkedin}
        >
          <Linkedin  />
          Linkedin
        </Link>
      </div>
      
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
