import { subtitle, title } from "@/components/primitives";
import { Link } from "@heroui/link";
import Image from "next/image";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { LinkedinIcon } from "../icons";

export const PortafolioFragment = () => {
    return (
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
            <LinkedinIcon/>
            Linkedin
          </Link>
        </div>
        
      </section>
    )
}