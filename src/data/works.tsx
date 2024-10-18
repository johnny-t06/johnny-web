import { StaticImageData } from "next/image";
import kaboo from "../../public/images/kaboo.png";
import fb from "../../public/images/newfb.png";
import tufts from "../../public/images/tufts.png";
import breadroses from "../../public/images/breadroses.png";
import legacyproj from "../../public/images/the_legacy_project_inc_logo.jpg";
type WorkType = "project" | "role";
export interface WorkItem {
  title: string;
  description: string;
  date: string;
  url: string;
  previewsrc: string;
  static?: boolean;
  type: WorkType;
  src: string | StaticImageData;
}

export const currentWorks: WorkItem[] = [
  {
    title: "Algorithms @ Tufts",
    description: "teaching assistant",
    date: "2024",
    url: "http://www.cs.tufts.edu/comp/160/",
    type: "role",
    previewsrc: "",
    src: tufts,
  },
  {
    title: "Bread and Roses",
    description: "web calendar + mass comm.",
    date: "2024",
    url: "https://breadandroseskitchen.org/about-us",
    type: "role",
    src: breadroses,
    previewsrc: "",
  },
];
export const prevWorks: WorkItem[] = [
  {
    title: "Freebites",
    description: "socializing free food against waste/insecurity",
    date: "2023-24 ",
    url: "https://apps.apple.com/us/app/freebites/id6664051907",
    previewsrc: "/images/fb-preview.png",
    type: "role",
    static: true,
    src: fb,
  },
  {
    title: "Kaboo",
    description: "making online shopping easy",
    date: "2024",
    url: "https://www.joinkaboo.com",
    previewsrc: "",
    type: "role",
    src: kaboo,
  },
  {
    title: "The Legacy Project",
    description: "elderly stories + school chapter expansion",
    date: "2023-24",
    url: "https://www.thelegacyproj.org",
    type: "role",
    previewsrc: "",
    src: legacyproj,
  },
  {
    title: "OfficeMinutes",
    description: "solving office hour inefficiencies",
    date: "2024",
    url: "https://www.linkedin.com/pulse/officeminutes-tufts-jumbohack-johnny-tan-dnouf/",
    previewsrc: "/images/om-preview.png",
    type: "project",
    static: true,
    src: tufts,
  },
];

export const allWorks = [...currentWorks, ...prevWorks];
