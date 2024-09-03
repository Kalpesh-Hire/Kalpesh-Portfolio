import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiMui, SiTailwindcss, SiWebflow } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconsFront = [
  {
    id: 1,
    icons: <FaHtml5 className="text-orange-600" />,
    title: "HTML",
  },
  {
    id: 2,
    icons: <FaCss3 className="text-blue-600" />,
    title: "CSS",
  },
  {
    id: 3,
    icons: <FaJs className="text-yellow-600" />,
    title: "JavaScript",
  },
];

const iconsLib = [
  {
    id: 1,
    icons: <FaReact className="text-sky-600" />,
    title: "React",
  },
  {
    id: 2,
    icons: <SiMui className="text-blue-600" />,
    title: "Material-UI",
  },
  {
    id: 3,
    icons: <SiTailwindcss className="text-blue-600" />,
    title: "Tailwind CSS",
  },
  {
    id: 4,
    icons: <FaBootstrap className="text-violet-600" />,
    title: "Bootstrap",
  },
];

const iconsTech = [
  {
    id: 1,
    icons: <VscVscode className="text-blue-600" />,
    title: "VS Code",
  },
  {
    id: 2,
    icons: <SiWebflow className="text-blue-600" />,
    title: "Webflow",
  },
  {
    id: 3,
    icons: <FaGitAlt className="text-orange-500" />,
    title: "Git",
  },
  {
    id: 4,
    icons: <FaGithub />,
    title: "GitHub",
  },
];
export { iconsTech, iconsFront, iconsLib };
