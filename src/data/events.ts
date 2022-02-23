export interface Event {
  title: string;
  summary: string;
  primaryLink: string;
  secondaryMessage?: string;
  secondaryLink?: string;
  image?: string;
  isFavourite?: boolean;
  isShown?: boolean;
}

export const event: {
  title: string;
  events: Event[];
} = {
  title: "Recent Events",
  events: [
    {
      title: "Machine Learning - Natural Language Processing",
      summary:
        "We explored interesting applications of Natural Language Processing (NLP), where participants created their own implementations of NLP models!",
      primaryLink:
        "https://gdsc.community.dev/events/details/developer-student-clubs-national-university-of-singapore-presents-machine-learning-workshop-natural-language-processing/",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645385256/Screenshot_2022-01-26_at_9.01.13_PM_dvfcai.png",
    },
    {
      title: "Fireside Chat - Open Government Products",
      summary:
        "We had a chat with Product Manager and Software Engineer from OGP about their experience developing tech solutions for Singapore.",
      primaryLink:
        "https://gdsc.community.dev/events/details/developer-student-clubs-national-university-of-singapore-presents-tech-for-good-fireside-chat-open-government-products/",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645378764/firesidechat-ogp_wgf3jx.png",
    },
    {
      title: "Machine Learning - Neural Networks",
      summary:
        "Have you ever wondered about a future where robots could think just like humans? What if we told you there already was a way? Well, not entirely.",
      primaryLink:
        "https://gdsc.community.dev/events/details/developer-student-clubs-national-university-of-singapore-presents-machine-learning-workshop-neural-networks/",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645384859/3.1-LI_WS3_vui0zo.png",
    },
    {
      title: "Portfolio Website in 2 Hours",
      summary:
        "Participants learnt how to code and host a portfolio website in 2 hours using HTML/CSS and Bootstrap to showcase their resume to potential employers.",
      primaryLink:
        "https://gdsc.community.dev/events/details/developer-student-clubs-national-university-of-singapore-presents-portfolio-website-in-2-hours/",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645385164/2.3-LI_WS2_bsfko4.png",
    },
    {
      title: "Cloud Computing with Google Cloud",
      summary:
        "We harnessed the power of Google Cloud to create a social media application!",
      primaryLink:
        "https://gdsc.community.dev/events/details/developer-student-clubs-national-university-of-singapore-presents-power-of-cloud-to-connect-your-community/",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645385665/2.2-IG_LI_WS1_mgul0w.png",
    },
  ],
};
