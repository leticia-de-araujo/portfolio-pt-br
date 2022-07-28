import Burger from "../imgs/3d-icons/Burger_perspective_matte.png";
import Hub from "../imgs/3d-icons/Hub_perspective_matte.png";
import LolaShop from "../imgs/3d-icons/LolaShop_cart_perspective_matte.png";
// import OnTrip from "../imgs/3d-icons/OnTrip_perspective_matte.png";

// TODO Colocar OnTrip

export const projects = [
  {
    name: "Burguer Shop",
    id: "Burger",
    bgColor: "linear-gradient(to top, #27ae60, #11998e)",
    icon: Burger,
    info: [
      "O objetivo desse projeto era ser uma página web para uma hamburgueria.",
      "Essa aplicação foi feita em React.js, e os produtos apresentados são frutos do consumo de uma API disponibilizada pela Kenzie Academy Brasil, através de uma requisição GET.",
      "O layout foi desenvolvido utilizando os conceitos de mobile-first e responsividade.",
    ],
    techs: ["HTML", "CSS", "JavaScript", "React.js", "Integração com REST Api"],
    liveDemo: "https://burguer-shop-pearl.vercel.app/",
    gitHub:
      "https://github.com/leticia-de-araujo/react-hamburgueria-da-kenzie-leticia-de-araujo",
  },
  {
    name: "DevHub",
    id: "Hub",
    bgColor: "linear-gradient(to top, #1cb5e0, #000046)",
    icon: Hub,
    info: [
      "A proposta desse projeto era ser um hub de portfólios de programadores.",
      "Essa aplicação foi desenvolvida em React.js. As funcionalidades foram implementadas fazendo requisições (GET, PUT, POST, DELETE) em uma API disponibilizada pela Kenzie Academy, usando o Axios.",
      "O layout foi desenvolvido utilizando os conceitos de mobile-first e responsividade.",
    ],
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Integração com REST Api",
      "React Hook Form",
      "React Router Dom",
      "Yup Resolver",
      "Axios",
      "Styled-components",
      "Material UI",
    ],
    liveDemo: "https://kenzie-hub-rosy-ten.vercel.app/",
    gitHub:
      "https://github.com/leticia-de-araujo/react-kenzie-hub-leticia-de-araujo",
  },
  {
    name: "Lola Shop",
    id: "LolaShop",
    bgColor: "linear-gradient(to top, #ffc0cb, #800080)",
    icon: LolaShop,
    info: [
      "O objetivo principal deste projeto foi praticar o uso do Redux com um e-commerce simples.",
      "Esta aplicação foi desenvolvida em React.js, com o auxílio de bibliotecas desta tecnologia.",
      "O layout foi desenvolvido utilizando os conceitos de mobile-first e responsividade.",
    ],
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Redux-thunk",
      "React Router Dom",
      "Styled-components",
      "Material UI",
    ],
    liveDemo: "https://kenzie-shop-dun-eight.vercel.app/",
    gitHub:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-redux-lolashop-leticia-de-araujo",
  },
];
