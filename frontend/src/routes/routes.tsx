import { Books, House, Star } from "@phosphor-icons/react";

export const publicRoutes = [
  {
    id: "community",
    label: "Community",
    icon: House, // ✅ This is correct
    link: "/",
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: Star, // ✅ This is correct
    link: "/reviews",
  },
  {
    id: "faculties",
    label: "Faculties",
    icon: Books, // ✅ This is correct
    link: "/faculties",
  },
];