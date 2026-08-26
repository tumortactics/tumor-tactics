export type PressFeature = {
  title: string;
  source: string;
  published: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  category: string;
};

export const pressFeatures: PressFeature[] = [
  {
    title: "Designer Diary: Tumor Tactics",
    source: "BoardGameGeek",
    published: "August 2026",
    description:
      "Tumor Tactics' creators share how family experiences with cancer became a classroom-ready strategy game. The diary follows the process of translating real oncology into decisions players can learn through play.",
    image: "/assets/homepage/IMG_3344.jpg",
    imageAlt: "A complete Tumor Tactics game setup ready for play",
    href: "https://boardgamegeek.com/blog/1/blogpost/190146/designer-diary-tumor-tactics-or-turning-cancer-bio",
    category: "Designer diary",
  },
  {
    title: "Service Spotlight: Tumor Tactics",
    source: "The Smile Project",
    published: "May 2026",
    description:
      "The Smile Project profiles Daniel Zhang and the service mission behind Tumor Tactics. The conversation explores how making cancer biology approachable can turn uncertainty into curiosity for younger students.",
    image: "/assets/Daniel.jpg",
    imageAlt: "Tumor Tactics co-founder Daniel Zhang",
    href: "https://www.the-smile-project.com/single-post/service-spotlight-tumor-tactics",
    category: "Founder interview",
  },
  {
    title: "The Kindness of Being Seen",
    source: "Kind Over Matter",
    published: "May 2026",
    description:
      "Kind Over Matter traces the personal story behind Tumor Tactics and the Matt Kurtz Kindness Grant. It shows how an experience of being helped through grief became a way to help other children understand cancer.",
    image: "/assets/daniel-grandmother.jpg",
    imageAlt: "Daniel Zhang with his grandmother",
    href: "https://kindovermatter.com/matt-kurtz-kindness-grant-winner-announcement-19/",
    category: "Grant feature",
  },
];
