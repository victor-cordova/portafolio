import { subtitle } from "@/components/primitives";

export default function AboutFragment() {
    return (
        <div id="acerca" className="mx-auto max-w-4xl px-6">
            <h2 className={subtitle()}>Acerca</h2>
            <div className={"mt-4 gap-4 grid"}>
                <p>
                    ¡Hola! Soy Víctor Andrés Córdova Poma, un <code className="bg-white text-black">Desarrollador Frontend</code> apasionado por crear interfaces web modernas con <code className="bg-white text-black">React.js, Next.js, Tailwind CSS y TypeScript</code >. También tengo experiencia en el área backend trabajando con <code className="bg-white text-black">Python, FastAPI y MySQL</code >, lo que me permite tener una visión integral del desarrollo web.
                </p>

                <p>
                    Con <code className="bg-white text-black">6 meses de experiencia</code> profesional, he reforzado tanto mis habilidades técnicas como mis capacidades para trabajar en equipo, adaptarme a nuevos desafíos y comunicar ideas de forma efectiva. Actualmente, estoy estudiando <code className="bg-white text-black">Ingeniería de Software en la UTP</code>, donde sigo ampliando mis conocimientos para estar al día en este campo en constante evolución.
                </p>

                <p>
                    Cuando no estoy programando, me gusta cantar, hacer ejercicio o sumergirme en el mundo de los videojuegos. Me apasiona aprender cosas nuevas, ya sea un framework, una buena práctica de código o incluso una canción complicada.
                </p>
                <p>
                    ¡Estoy listo para aportar mis habilidades y creatividad a proyectos innovadores!
                </p>
            </div>
        </div>
    );
}
