import { Skills } from "constants/technologies";

export interface Project {
  title: string;
  titleLink?: string;
  descriptions: string[];
  summary: string;
  primaryMessage: string;
  primaryLink?: string;
  secondaryMessage?: string;
  secondaryLink?: string;
  skills: Skills[];
  image?: string;
  isFavourite?: boolean;
  isShown?: boolean; // Shown by default, set to false to hide
}

export const project: {
  favouriteTitle: string;
  favouriteSubtitle: string;
  regularTitle: string;
  projects: Project[];
} = {
  favouriteTitle: "favourite projects.",
  favouriteSubtitle: "Coding and design projects that I enjoyed working on.",
  regularTitle: "other projects.",
  projects: [
    {
      title: "Superhero Bingo",
      titleLink: "https://superhero-bingo.netlify.app",
      descriptions: [
        "A Socket.IO-powered web application that supports the playing of an icebreaker activity called Superhero Bingo.",
        "Built over three days for the first lesson of CS3216 in 2021.",
      ],
      summary:
        "Socket.IO-powered web application for playing the classic CS3216 icebreaker activity!",
      skills: [
        Skills.REACT,
        Skills.TYPESCRIPT,
        Skills.REDUX,
        Skills.TAILWIND,
        Skills.NODE_JS,
        Skills.SOCKET_IO,
        Skills.PRISMA,
        Skills.POSTGRES,
      ],
      primaryMessage: "See feature on NUS SoC's Facebook.",
      primaryLink:
        "https://www.facebook.com/nusschoolofcomputing/posts/10159845848278885",
      secondaryMessage: "View the code for Superhero Bingo on GitHub.",
      secondaryLink: "https://github.com/zhuhanming/superhero-bingo",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629788761/portfolio-website/superhero-bingo_af3els.png",
    },
    {
      title: "Fika",
      descriptions: [
        "Fika offers a platform for informal touchpoints with fellow colleagues in your company, even those beyond your department or functional group, as a first step to building lasting connections.",
        "An iOS app built over three days for the CODE_EXP Hackathon 2021.",
      ],
      summary:
        "Engage in casual 1:1s with your colleagues over breakfast or lunch using Fika today!",
      skills: [Skills.SWIFT, Skills.FIREBASE, Skills.XD, Skills.ILLUSTRATOR],
      primaryMessage: "View the code for Fika on GitHub.",
      primaryLink: "https://github.com/CS-nakes/Fika",
      secondaryMessage: "Watch the demo video for Fika.",
      secondaryLink: "https://www.youtube.com/watch?v=osGCwd6Znd0",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629789383/portfolio-website/fika_c2hu6o.png",
    },
    {
      title: "Can You Protect Singapore?",
      titleLink: "https://can-you-protect-singapore.netlify.app",
      descriptions: [
        "A choose-your-own-adventure game that aims to teach Singapore history in a fresh and engaging manner.",
      ],
      summary:
        "A choose-your-own-adventure game that aims to teach Singapore history in a fresh and engaging manner.",
      skills: [Skills.REACT, Skills.JAVASCRIPT, Skills.SASS],
      primaryMessage: "View the code for CYPS on GitHub.",
      primaryLink: "https://github.com/zhuhanming/can-you-protect-singapore",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629790100/portfolio-website/can-you-protect-singapore_yoitww.png",
    },
    {
      title: "Coding Questions Tracker",
      titleLink: "http://t.me/CodingQuestionsBot",
      descriptions: [
        "A Telegram bot to help groups keep their members accountable for technical interview preparation. This bot helps with both tracking question practice and arranging mock interviews.",
        "Used by over 20 students during Summer 2021.",
      ],
      summary:
        "Telegram bot to help groups keep their members accountable for technical interview preparation.",
      skills: [Skills.PYTHON, Skills.SQLALCHEMY, Skills.POSTGRES],
      primaryMessage: "View the code for Coding Questions Tracker on GitHub.",
      primaryLink:
        "https://github.com/zhuhanming/coding-questions-telegram-bot",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629798700/portfolio-website/coding-questions-tracker_wkfcvn.png",
    },
    {
      title: "Doodle2Gather",
      descriptions: [
        "A collaborative whiteboarding iPad app armed with powerful doodling tools, infinite canvases and real-time video communication. It aims to empower users in their idea generation and discussion online.",
        "This app was built by a team of four, with me as a frontend developer.",
      ],
      summary:
        "Collaborative whiteboarding application for iPadOS with powerful doodling and conferencing tools.",
      skills: [Skills.SWIFT, Skills.FIREBASE, Skills.XD],
      primaryMessage: "View the code for Doodle2Gather on GitHub.",
      primaryLink: "https://github.com/Doodle2Gather/Doodle2Gather",
      secondaryMessage: "Watch the demo video for Doodle2Gather.",
      secondaryLink: "https://www.youtube.com/watch?v=5cVotr76mx4",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1619399352/portfolio-website/doodle2gather_ierjp6.png",
      isFavourite: true,
    },
    {
      title: "FattoCatto",
      descriptions: [
        "A peggle clone built for iPad, where you play the role of a fat cat with superpowers, and you aim to strike down as much food as possible with the yarn balls you have!",
        "This app was built for CS3217, and it runs on self-written Physics and game engines.",
      ],
      summary:
        "A Peggle clone built for iPadOS, running on self-written Physics and game engines.",
      skills: [Skills.SWIFT, Skills.REALM, Skills.ILLUSTRATOR],
      primaryMessage: "Watch the demo video for FattoCatto.",
      primaryLink: "https://www.youtube.com/watch?v=CFgW_iDIpqkr",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629807139/portfolio-website/fatto-catto_sakhfu.png",
    },
    {
      title: "ZoomBa",
      titleLink: "https://github.com/nus-zoomers/ZoomBa/releases/tag/1.0.1",
      descriptions: [
        "ZoomBa is here to help you succeed at Zoom presentations. ZoomBa helps to display your script as captions over your Zoom call. Experience the freedom of having the script follow you, as our voice recognition algorithms move your script along at the right pace.",
      ],
      summary:
        "ZoomBa helps to display your script as captions over your Zoom call, letting you focus on speaking.",
      skills: [Skills.ELECTRON, Skills.REACT, Skills.SPEECH_TO_TEXT, Skills.XD],
      primaryMessage: "View the code for ZoomBa on GitHub.",
      primaryLink: "https://github.com/nus-zoomers/ZoomBa",
      secondaryMessage: "Watch the demo video for ZoomBa.",
      secondaryLink: "https://www.youtube.com/watch?v=kzDJaXEPeIY",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629807365/portfolio-website/zoomba_lsytdh.png",
    },
    {
      title: "Quest",
      descriptions: [],
      summary: "",
      skills: [
        Skills.REACT,
        Skills.TYPESCRIPT,
        Skills.MATERIAL_UI,
        Skills.NODE_JS,
        Skills.EXPRESS,
        Skills.POSTGRES,
      ],
      primaryMessage: "No code available for viewing.",
      isShown: false,
    },
    {
      title: "Service Manager",
      descriptions: [
        "This service manager helps you to manage command line commands that you execute (also called services), allowing you to see their statuses, and wait on them or kill them as required.",
        "Written for CS2106 Lab 2.",
      ],
      summary:
        "Manage command line commands that you execute, such as waiting on or killing them.",
      skills: [Skills.C],
      primaryMessage: "View the code for Service Manager on GitHub.",
      primaryLink: "https://github.com/zhuhanming/service-manager",
      isShown: false,
    },
    {
      title: "SwiftCOBRA",
      descriptions: [
        "Built in collaboration with RSAF and MOH, SwiftCOBRA supports national contact tracing efforts by enabling effortless work delegation and seamless integration with information sources such as TraceTogether and SafeEntry.",
        "Users of the application can quickly piece together activities done by infected persons and identify close contacts to quarantine.",
      ],
      summary:
        "National contact tracing application used by hospitals in Singapore to fight against COVID-19.",
      skills: [
        Skills.REACT,
        Skills.TYPESCRIPT,
        Skills.ANT_DESIGN,
        Skills.APOLLO,
        Skills.GRAPHQL,
        Skills.PRISMA,
        Skills.XD,
      ],
      primaryMessage: "See design files for SwiftCOBRA.",
      primaryLink:
        "https://github.com/zhuhanming/adobe-xd-files/tree/master/SwiftCOBRA",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1596111370/portfolio-website/swiftcobra3_vamayc.png",
      isFavourite: true,
    },
    {
      title: "Lions Befrienders Volunteer App",
      titleLink: "https://volunteer.lb.org.sg",
      descriptions: [
        "A one-stop progressive web application that enables volunteers to register for volunteering events and take online courses.",
        "This allowed Lions Befrienders, a voluntary welfare organisation, to manage all their volunteers via a single online app, streamlining their processes.",
      ],
      summary:
        "Progressive web application that enables volunteers to register for events and do online training.",
      skills: [Skills.REACT, Skills.TYPESCRIPT, Skills.REDUX, Skills.IONIC],
      primaryMessage: "No code available for viewing.",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1595145502/portfolio-website/lions_tvqo2o.png",
    },
    {
      title: "Modulo",
      titleLink: "https://github.com/zhuhanming/modulo/releases/tag/v1.4.1",
      descriptions: [
        "Modulo helps NUS students manage their modules and classes, ensuring that they never fall behind on their work! The application is designed for both fast typists and mouse clickers.",
      ],
      summary:
        "Seamless module and class management for students at the National University of Singapore.",
      skills: [Skills.JAVA, Skills.JAVAFX, Skills.TRAVIS, Skills.XD],
      primaryMessage: "View the code for Modulo on GitHub.",
      primaryLink: "https://github.com/zhuhanming/modulo",
      secondaryMessage: "See design files for Modulo.",
      secondaryLink:
        "https://github.com/zhuhanming/adobe-xd-files/tree/master/Modulo",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1603588357/portfolio-website/modulo2_xn2un1.png",
    },
    {
      title: "Gaming Life",
      titleLink: "https://gaming-life.netlify.app",
      descriptions: [
        'Gaming Life is a 2D "dungeon-diving" trivia game built for Dr Jeremy Fernando\'s UTC2113: Gaming Life module, where we were given complete freedom to do what we like for our individual work.',
        "This game was built from scratch using React and Redux without the use of any game engine.",
      ],
      summary:
        'A 2D "dungeon-diving" trivia game that tests one\'s understanding of UTC2113: Gaming Life',
      skills: [Skills.REACT, Skills.JAVASCRIPT, Skills.SASS],
      primaryMessage: "View the code for Gaming Life on GitHub.",
      primaryLink: "https://github.com/zhuhanming/gaming-life",
      isShown: false,
    },
    {
      title: "Duchess",
      descriptions: [],
      summary: "",
      skills: [Skills.JAVA, Skills.JAVAFX],
      primaryMessage: "View the code for Duchess on GitHub.",
      primaryLink: "https://github.com/zhuhanming/duchess",
      isShown: false,
    },
    {
      title: "CS2100 Cheatsheet",
      titleLink: "https://cs2100-cheatsheet.netlify.app",
      descriptions: [],
      summary: "",
      skills: [Skills.REACT, Skills.BULMA, Skills.SASS],
      primaryMessage: "View the code for CS2100 Cheatsheet on GitHub.",
      primaryLink: "https://github.com/zhuhanming/cs2100-cheatsheet",
      isShown: false,
    },
    {
      title: "Auturec",
      descriptions: [],
      summary: "",
      skills: [
        Skills.REACT,
        Skills.JAVASCRIPT,
        Skills.MATERIAL_UI,
        Skills.FIREBASE,
      ],
      primaryMessage: "No code available for viewing.",
      isShown: false,
    },
    {
      title: "Folio",
      titleLink: "https://folio-hnr.netlify.app/",
      descriptions: [
        "Folio is a portfolio builder that helps you to craft a simple yet beautiful portfolio in minutes, through a seamless drag and drop experience. Save your work and immediately get a shareable link to your online portfolio.",
        "Folio was built over a course of 24 hours for the hackathon Hack&Roll 2020.",
      ],
      summary:
        "A drag-and-drop portfolio builder that helps you to craft a simple yet beautiful portfolio in minutes.",
      skills: [
        Skills.REACT,
        Skills.JAVASCRIPT,
        Skills.REDUX,
        Skills.BULMA,
        Skills.RUBY,
        Skills.RAILS,
        Skills.POSTGRES,
      ],
      primaryMessage: "View the frontend code for Folio on GitHub.",
      primaryLink: "https://github.com/zhuhanming/folio",
      secondaryMessage: "View the backend code for Folio on GitHub.",
      secondaryLink: "https://github.com/zhuhanming/folio-backend",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629807552/portfolio-website/folio_ivgzu9.png",
    },
    {
      title: "Hit Your Targets",
      titleLink: "https://www.hityourtargets.xyz",
      descriptions: [
        "A todo list that revolves around task and subtask management, Hit Your Targets aims (pun intended) to fill the gap in the market, and be a precise tool for users to plan every single detail of their life out.",
        "Armed with three different views for users organise their day to day activities, Hit Your Targets guarantees to help you, well, hit your targets.",
      ],
      summary:
        "A todo list for the meticulous user, allowing for precise task and subtask management.",
      skills: [
        Skills.REACT,
        Skills.TYPESCRIPT,
        Skills.REDUX,
        Skills.BULMA,
        Skills.RUBY,
        Skills.RAILS,
        Skills.POSTGRES,
        Skills.XD,
        Skills.PHOTOSHOP,
      ],
      primaryMessage: "View the code for Hit Your Targets on GitHub.",
      primaryLink: "https://github.com/zhuhanming/hit-your-targets",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629807843/portfolio-website/hityourtargets_sfxdlo.png",
    },
    {
      title: "Acquity",
      titleLink: "https://www.acquity.io",
      descriptions: [
        "An open-source, non-profit platform that matches buyers and sellers of private equity in a dark pool system.",
        "This project was successfully completed by a team of four, with me as the UI/UX designer.",
      ],
      summary:
        "Matches buyers and sellers of private equity in a dark pool system.",
      skills: [
        Skills.REACT,
        Skills.JAVASCRIPT,
        Skills.REDUX,
        Skills.BULMA,
        Skills.PYTHON,
        Skills.POSTGRES,
        Skills.XD,
        Skills.PHOTOSHOP,
        Skills.AFTER_EFFECTS,
      ],
      primaryMessage: "View the code for Acquity on GitHub.",
      primaryLink: "https://github.com/acquity",
      secondaryMessage: "See design files for Acquity.",
      secondaryLink:
        "https://github.com/zhuhanming/adobe-xd-files/tree/master/Acquity",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1603587798/portfolio-website/acquitymac2_xyasny.png",
      isFavourite: true,
    },
    {
      title: "Vent It",
      descriptions: [
        "A progressive web application designed to help users vent their frustrations by screaming right into their phone. These frustrations are then ranked based on how loud the scream was, and will fade away day by day.",
        "This was built by a team of four, where I was the frontend developer.",
      ],
      summary:
        "Vent your frustrations by simply screaming into this web application. We'll do the rest for you!",
      skills: [
        Skills.REACT,
        Skills.JAVASCRIPT,
        Skills.REDUX,
        Skills.NODE_JS,
        Skills.EXPRESS,
        Skills.POSTGRES,
      ],
      primaryMessage: "View the code for Vent It on GitHub.",
      primaryLink: "https://github.com/zhuhanming/vent-it-pwa",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1629818081/portfolio-website/vent-it_hcorvy.png",
    },
    {
      title: "NUSMaps",
      titleLink: "https://zhuhanming.github.io/cs3216-NUSMaps-landing-site/",
      descriptions: [
        "Have you ever felt lost on the first day of school? Not sure where to go for your classes? Fret not, for you are not alone. NUSMaps is here for you! Or so we wish, but this is unfortunately just a prototype.",
        "Built for CS3216, this project let us experience the ins and outs of user research and UI/UX refinement. The final product was conceived after five iterations.",
        "This was built by a team of four, where I was the lead designer.",
      ],
      summary:
        "Interactive prototype demonstrating a reimagined navigation experience within the campus.",
      skills: [Skills.XD, Skills.PHOTOSHOP],
      primaryMessage: "See design files for NUSMaps.",
      primaryLink:
        "https://github.com/zhuhanming/adobe-xd-files/tree/master/NUSMaps",
      image:
        "https://res.cloudinary.com/dwbg1zcql/image/upload/v1595147230/portfolio-website/nusmaps_oxn9hw.png",
    },
    {
      title: "Duolingo Data Analysis",
      descriptions: [
        "Have you ever wondered what the hardest language to learn was? So did I! This is why I embarked on an analysis of Duolingo's datasets using Python and Pandas to find out the answer.",
        "Did this for the Hackwagon DS102 course.",
      ],
      summary:
        "An analysis of Duolingo's datasets to find out what the hardest language to learn is!",
      skills: [Skills.PYTHON],
      primaryMessage: "View the Jupyter Notebook on GitHub.",
      primaryLink:
        "https://github.com/zhuhanming/hackwagon-ds102-duolingo-data-analysis",
      isShown: false,
    },
  ],
};
