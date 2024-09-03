import front from "../../public/front-end icon.svg";
import web from "../../public/webdeveloper icon.svg";
const servicesData = [
  {
    icons: <img src={front} alt="" />,
    title: "FrontEnd Developer",
    read: <button>Read more</button>,
  },
  {
    icons: <img src={web} alt="" />,
    title: "Web Developer",
    read: <button>Read more</button>,
  },
];

export { servicesData };
