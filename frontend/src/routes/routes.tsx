import { Books, House, Star } from "@phosphor-icons/react";

export const publicRoutes = [
  {
    id: "community",
    label: "Community",
    icon: House, 
    link: "/",
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: Star,
    link: "/reviews",
  },
  {
    id: "faculties",
    label: "Faculties",
    icon: Books, 
    link: "/faculties",
  },
];