import { HomeIcon, Trophy, CircleUserRound, Heart , Twitter, Instagram, Facebook } from "lucide-react";
//import bulbasaur2 from "../../public/bulbasaur2.png";


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Jugadores",
        icon: <CircleUserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/players",
    },
    {
        id: 3,
        title: "Trofeos",
        icon: <Trophy size={25} color="#fff" strokeWidth={1} />,
        link: "/trophy",
    },
    {
        id: 4,
        title: "Eventos",
        icon: <Heart size={25} color="#fff"strokeWidth={1} />,
        link: "/events",
    }   
];

export const socialNetworks = [
  {
      id: 1,
      logo: <Instagram size={30} strokeWidth={1} />,
      src: "https://www.instagram.com/bulberhamptonfc/",
      
  },
  {
      id: 2,
      logo: <Twitter size={30} strokeWidth={1} />,
      src: "https://twitter.com/",
  },
  {
      id: 3,
      logo: <Facebook size={30} strokeWidth={1} />,
      src: "https://web.facebook.com/",
  }
];





/*
export const players = [

    {
      nombre: "Rodrigo Soto",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Director Técnico. <Speech size={20}/>
      </>
    },
    {
      nombre: "Danilo Henriquez",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Arquero. <FaHandPaper size={20} />
      </>
    },
    {
      nombre: "Cristian Eduardo",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Arquero. <FaHandPaper size={20} />
      </>
    },
    {
      nombre: "Tomas Bustamante",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Thomas Peters",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Alan Alcantara",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Byron Cerda",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Defensa. <FaShieldAlt size={20} />
      </>
    },
    {
      nombre: "Roberto Fernandez",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo defensivo. <FaTshirt size={20} />
      </>
    },

    {
      nombre: "Claudio Díaz",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Banca indiscutible. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Sebastián Ramírez",
      imagen: bulbasaur2,
      descripcion: 
      <>
        crack. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Andrés Figueroa",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo mixto. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Francisco Guzmán",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo mixto. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "Rodrigo Flores",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Mediocampo mixto. <FaTshirt size={20} />
      </>
    },
    {
      nombre: "César Ángulo",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Delantero. <FaFutbol size={20} />
      </>
    },
    {
      nombre: "Luciano Díaz",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Delantero. <FaFutbol size={20} />
      </>
    },
    {
      nombre: "Fabrizzio Valladares",
      imagen: bulbasaur2,
      descripcion: 
      <>
        Delantero. <FaFutbol size={20} />
      </>
    }
  ];
*/