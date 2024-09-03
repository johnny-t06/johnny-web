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
    title: "Alogrithms TA",
    description: "Description 1",
    date: "2021",
    url: "https://www.google.com",
    type: "role",
  },
  {
    title: "Bread and Roses",
    description: "Description 2",
    date: "2021",
    url: "https://www.google.com",
    type: "role",
  },
];
export const prevWorks: WorkItem[] = [
  {
    title: "Freebites",
    description: "Description 1",
    date: "2021",
    url: "https://www.google.com",
    type: "role",
  },

  {
    title: "Kaboo",
    description: "Description 2",
    date: "2021",
    url: "https://www.google.com",
    type: "role",
  },
  {
    title: "The Legacy Project",
    description: "Description 3",
    date: "2021",
    url: "https://www.google.com",
    type: "role",
  },
  {
    title: "OfficeMinutesv2",
    description: "Description 3",
    date: "2021",
    url: "https://www.google.com",
    type: "project",
  },
  {
    title: "OfficeMinutesv1",
    description: "Description 4",
    date: "2021",
    url: "https://www.google.com",
    type: "project",
  },
];
