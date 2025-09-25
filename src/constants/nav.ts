export type NavItem = {
  id: string;
  label: string;
  link: string;
};

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "홈",
    link: "/",
  },
  {
    id: "projects",
    label: "프로젝트",
    link: "/projects",
  },
];
