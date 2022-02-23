import { Skills } from "constants/technologies";

export interface About {
  title: string;
  descriptions: string[];
  primaryMessage: string;
  primaryLink: string;
  secondaryMessage?: string;
  secondaryLink?: string;
  skills: Skills[];
  image?: string;
  isFavourite?: boolean;
  isShown?: boolean;
}

export const about: {
  aboutItems: About[];
} = {
  aboutItems: [
    {
      title: "Build tech solutions for the community",
      descriptions: [
        "We work with local Non-Profit Organizations to build tech solutions that improve their processes and impact the community.",
      ],
      skills: [],
      primaryMessage: "Read more",
      primaryLink: "/projects",
      image:
        "https://res.cloudinary.com/dsk6p2wwo/image/upload/v1642991043/Screenshot_2022-01-24_at_10.23.55_AM_k5j6je.png",
    },
    {
      title: "Conduct tech workshops",
      descriptions: [
        "Our tech workshops aim to build generative skills in tech among students regardless of background.",
        "Past topics range from Web Development to Machine Learning",
      ],
      skills: [],
      primaryMessage: "Learn more",
      primaryLink: "/wokrshops",
      image:
        "https://res.cloudinary.com/dsk6p2wwo/image/upload/v1642996150/smartmockups_kys584wc_pn69b6.jpg",
    },
  ],
};
