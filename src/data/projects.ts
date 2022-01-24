import { Skills } from "constants/technologies";

export interface Project {
  title: string;
  descriptions: string[];
  summary: string;
  primaryMessage: string;
  primaryLink: string;
  secondaryMessage?: string;
  secondaryLink?: string;
  skills: Skills[];
  image?: string;
  isFavourite?: boolean;
  isShown?: boolean;
}

export const project: {
  favouriteTitle: string;
  favouriteSubtitle: string;
  regularTitle: string;
  projects: Project[];
} = {
  favouriteTitle: "favourite projects.",
  favouriteSubtitle: "Coding and design projects that I enjoyed working on.",
  regularTitle: "Projects",
  projects: [
    {
      title: "Wadio: An ORD Countdown App",
      descriptions: [
        "My first experience with coding was an app to help NSFs countdown to ORD.",
        "Over 4000 downloads to date.",
      ],
      summary:
        "My first experience with coding was an app to help NSFs countdown to ORD. Over 4000 downloads to date.",
      skills: [Skills.SWIFT],
      primaryMessage: "View on the App Store.",
      primaryLink:
        "https://apps.apple.com/sg/app/wadio-an-ord-countdown-app/id1509665634",
      image:
        "https://res.cloudinary.com/dsk6p2wwo/image/upload/v1642991043/Screenshot_2022-01-24_at_10.23.55_AM_k5j6je.png",
    },
    {
      title: "OpenJio",
      descriptions: [
        "Create OpenJios and join supper orders with your friends!",
        "A Progressive Web App built for NUS Orbital Project.",
      ],
      summary:
        "Create OpenJios and join supper orders with your friends! A Progressive Web App built for NUS Orbital Project.",
      skills: [
        Skills.REACT,
        Skills.NODE_JS,
        Skills.POSTGRES,
        Skills.EXPRESS,
        Skills.TYPESCRIPT,
        Skills.TAILWIND,
      ],
      primaryMessage: "View the app.",
      primaryLink: "https://openjio.netlify.app",
      image:
        "https://res.cloudinary.com/dsk6p2wwo/image/upload/v1642996150/smartmockups_kys584wc_pn69b6.jpg",
    },
    {
      title: "YouTube Channel",
      descriptions: [],
      summary:
        "I make vlogs about my life in NUS and beyond as a way to document my growth and memories. Over 3000 subscribers to date.",
      skills: [Skills.FINALCUTPRO],
      primaryMessage: "Subscribe to my channel!",
      primaryLink: "https://youtube.com/joelwongjy",
      image:
        "https://res.cloudinary.com/dsk6p2wwo/image/upload/ar_16:9,c_fit,h_1919,w_3413/v1642997637/Screenshot_2022-01-24_at_12.12.41_PM_me6zc4.png",
    },
  ],
};
