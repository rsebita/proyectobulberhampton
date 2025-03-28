"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
    return ( 
        <div className="z-20 w-full">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/bolba.png" priority width={1500} height={1500} alt="Bulbasaur"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">La amistad,
                        <TypeAnimation sequence={[
                            "siempre invicta",1000,
                            "siempre viva",
                            1000,
                            "siempre fuerte",
                            1000,
                            "siempre vigente",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Todo comenzó en el colegio, donde un grupo de amigos compartía una pasión en común: el fútbol. 
                    Lo que empezó como simples partidos en los recreos se convirtió en algo más grande. 
                    Con el tiempo, nuestro talento y dedicación nos llevaron a consolidarnos como un equipo unido y competitivo.
                    </p>
                    <div className="flex justify-center gap-4 md:justify-start">
                        <Link 
                        href="/"
                        className="px-3 py-2 transition-all border-2 cursor pointer text-md font-bold w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver equipo
                        </Link>
                        <Link 
                        href="/"
                        className="px-3 py-2 transition-all border-2 cursor pointer text-md font-bold w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Introduction;