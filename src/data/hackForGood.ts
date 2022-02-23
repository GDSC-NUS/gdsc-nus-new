export interface ScheduleItem {
  startTime: string;
  endTime: string;
  event: string;
}

export interface TimelineItem {
  date: string;
  time?: string;
  event: string;
  location?: string;
}

export interface Theme {
  title: string;
  image: string;
}

export interface ProblemStatement {
  npo: string;
  aboutNpo: string;
  statement: string;
}

export interface Sponsor {
  [tier: string]: {
    name: string;
    image: string;
  }[];
}

export const HackForGood: {
  year: string;
  date: string;
  openingDate: string;
  finaleDate: string;
  caption: string;
  link: string;
  linkMessage: string;
  primaryDetails: string;
  secondaryDetails: string;
  themes: Theme[];
  problemStatements: ProblemStatement[];
  timeline: TimelineItem[];
  openingSchedule: ScheduleItem[];
  finaleSchedule: ScheduleItem[];
  sponsors: Sponsor;
} = {
  year: "2022",
  date: "7 - 19 March 2022",
  openingDate: "7 March, Monday",
  finaleDate: "19 March, Saturday",
  caption: "Build technology for social good!",
  link: "https://gdsc.community.dev/events/details/developer-student-clubs-national-university-of-singapore-presents-machine-learning-workshop-natural-language-processing/",
  linkMessage: "Sign up here",
  primaryDetails:
    "Hack For Good is a student-run hackathon which seeks to inspire students to learn and use technology for social causes, developing solutions to real problem statements from NPOs in Singapore.",
  secondaryDetails:
    "Participating teams are expected to create technological prototypes as part of their solution to tackle their chosen statement. We want to be practical and do real good with this initiative. We are hoping to foster collaborations between the club, corporate sponsors, NPOs and the students in this event!",
  problemStatements: [
    {
      npo: "Daughters of Tomorrow",
      aboutNpo: "We are a non-profit organization in Singapore.",
      statement: "Build a tech solution",
    },
  ],
  themes: [
    {
      title: "Community",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645610632/community_kguhzz.png",
    },
    {
      title: "Environment",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645610637/environment_lnhtol.png",
    },
    {
      title: "Equality",
      image:
        "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645610614/equality_h6c8z9.png",
    },
  ],
  timeline: [
    {
      date: "21 Feb 2022",
      event: "Registration Opens",
    },
    {
      date: "7 Mar 2022",
      time: "1800",
      location: "Virtual",
      event: "Opening Ceremony",
    },
    {
      date: "7-9 Mar 2022",
      time: "TBA",
      location: "Virtual",
      event: "Workshops",
    },
    {
      date: "14 Mar 2022",
      event: "Submissions Close",
    },
    {
      date: "16 Mar 2022",
      event: "Release of Finalists",
    },
    {
      date: "19 Mar 2022",
      time: "1430-1730",
      location: "NUS School of Computing COM1 SR-1",
      event: "Finale",
    },
  ],
  openingSchedule: [
    { startTime: "1800", endTime: "1805", event: "DSC Introduction" },
    { startTime: "1800", endTime: "1805", event: "Hack For Good Introduction" },
    {
      startTime: "1800",
      endTime: "1805",
      event: "Sharing of Problem Statements by NPOs",
    },
    { startTime: "1800", endTime: "1805", event: "Sharing by Sponsors" },
  ],
  finaleSchedule: [
    { startTime: "1430", endTime: "1440", event: "Participants' Arrival" },
    { startTime: "1440", endTime: "1500", event: "Opening Address" },
    { startTime: "1500", endTime: "1650", event: "Final Pitch by Finalists" },
    { startTime: "1650", endTime: "1710", event: "Judges Deliberation" },
    {
      startTime: "1710",
      endTime: "1730",
      event: "Announcement of Top 3 Teams",
    },
  ],
  sponsors: {
    Gold: [
      {
        name: "GIC",
        image:
          "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645612681/gic_xxl8rx.jpg",
      },
      {
        name: "Thoughtworks",
        image:
          "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645611644/thoughtworks_dc3x2j.png",
      },
    ],
    Silver: [
      {
        name: "Quest Ventures",
        image:
          "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645612274/questventures_hukdlk.png",
      },
    ],
    Bronze: [
      {
        name: "Sustainable Living Labs",
        image:
          "https://res.cloudinary.com/dgzeeixzi/image/upload/v1645612825/sl2_ywdmqi.png",
      },
    ],
    Supported: [
      {
        name: "Google",
        image:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      },
    ],
  },
};
