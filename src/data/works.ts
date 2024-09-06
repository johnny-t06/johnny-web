type WorkType = "project" | "role";
export interface WorkItem {
  title: string;
  description: string;
  date: string;
  url: string;
  type: WorkType;
}

export const currentWorks: WorkItem[] = [
  {
    title: "Alogrithms @ Tufts",
    description: "teaching assistant",
    date: "2024",
    url: "http://www.cs.tufts.edu/comp/160/",
    type: "role",
  },
  {
    title: "Bread and Roses",
    description: "web calendar + mass comm.",
    date: "2024",
    url: "https://www.google.com",
    type: "role",
  },
];
export const prevWorks: WorkItem[] = [
  {
    title: "Freebites",
    description: "socializing free food against waste/insecurity",
    date: "2023-24 ",
    url: "https://www.google.com",
    type: "role",
  },

  {
    title: "Kaboo",
    description: "extension for cheaper e-shopping",
    date: "2024",
    url: "https://www.google.com",
    type: "role",
  },
  {
    title: "The Legacy Project",
    description: "elderly stories + school chapter expansion",
    date: "2023-24",
    url: "https://www.google.com",
    type: "role",
  },
  {
    title: "OfficeMinutes",
    description: "solving office hour inefficiencies",
    date: "2024",
    url: "https://www.google.com",
    type: "project",
  },
];
