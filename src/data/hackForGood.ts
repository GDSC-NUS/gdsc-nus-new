import { About } from "./about";

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
  aboutItems: About[];
  timeline: TimelineItem[];
  openingSchedule: ScheduleItem[];
  finaleSchedule: ScheduleItem[];
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
};
