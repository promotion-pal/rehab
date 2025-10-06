export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  company: {
    name: "Рехаб",
    phone: "+79941387422",
  },
  partners: {
    name: "Prom Pal",
    web: "",
  },
  meta: {
    name: "Реабилитационный центр гор. Хабаровск",
    description:
      "Make beautiful websites regardless of your design experience.",
  },
  navItems: [
    {
      label: "О нас",
      href: "/about",
    },
    {
      label: "Программы",
      href: "/programs",
    },
    {
      label: "Контакты",
      href: "/contacts",
    },
    {
      label: "Статьи",
      href: "/article",
    },
  ],
  navMenuItems: [
    {
      label: "О нас",
      href: "/about",
    },
    {
      label: "Программы",
      href: "/programs",
    },
    {
      label: "Контакты",
      href: "/contacts",
    },
    {
      label: "Статьи",
      href: "/article",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
