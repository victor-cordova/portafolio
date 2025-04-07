import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import { subtitle } from "@/components/primitives";

export const ExperienceFragment = () => {
    return (
        <div className="mx-auto max-w-4xl px-6">
            <h2 className={subtitle()}>Experiencia</h2>
            <Card className="max-w-[600px] mt-4 p-4">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
        <Image width={100} height={20} src={"/assets/alticsa-logotipo.png"} alt="alticsa"/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Desarrollador Front-end</h4>
          </div>
        </div>

      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 text-balance">
        <p>Desarrollador Full Stack con foco en soluciones innovadoras usando Next.js, TypeScript y Tailwind CSS.</p>
        <p>Logros clave:</p>
        <ul>

        <li>
🚀 Mejoré un 50% la consistencia UI con componentes reutilizables
        </li>
        <li>
⚡ Optimicé 25% tiempos de respuesta API (Python/FastAPI) y flujos de datos con SQL
</li>
<li>
📱 Implementé interfaces responsivas que elevaron la experiencia móvil
</li>
<li>
🔍 Aumenté 35% la calidad de código con sistema de revisiones
</li>
<li>
🧠 Integración estratégica front-back para decisiones arquitectónicas
</li>
<li>
🔄 Agilecé desarrollo con mejoras en estructura de proyectos</li>
</ul>
      </CardBody>
    </Card>
        </div>
    );
}
