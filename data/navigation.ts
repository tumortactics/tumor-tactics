export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const navigationGroups: { label: string; items: NavigationItem[] }[] = [
  {
    label: "About",
    items: [
      { label: "Why It Matters", href: "/the-problem", description: "The education gap the game helps address." },
      { label: "Our Story", href: "/our-story", description: "The personal experience that started Tumor Tactics." },
    ],
  },
  {
    label: "The Game",
    items: [
      { label: "How to Play", href: "/how-to-play", description: "Watch the walkthrough and learn the rules." },
      { label: "Free Download", href: "/game", description: "Print the cards and rulebook to play today." },
    ],
  },
];

export const directItems: NavigationItem[] = [
  { label: "Meet Our Team", href: "/team" },
  { label: "Impact", href: "/impact-and-recognition" },
  { label: "Get Involved", href: "/get-involved" },
];

export const footerGroups = [
  { label: "About", links: [...navigationGroups[0].items, directItems[0]] },
  { label: "The Game", links: [...navigationGroups[1].items, { label: "Shop the Kit", href: "/shop" }] },
  { label: "Explore", links: [directItems[1], { label: "Classroom Gallery", href: "/gallery" }, directItems[2], { label: "Contact Us", href: "/contact" }] },
];
