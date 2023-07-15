import { faEnvelope, faPhone, faTty } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const data = [
  {
    id: 0,
    title: "Team Members Details",
    description:
      "Pick a template, customize the content and design elements, and launch! Or, design your next fabulous email.",
  },
  {
    id: 1,
    name: "Robert Banks",
    role: "CEO & Founder",
    img: "/assets/sections/team-members/member-robert-banks.png",
    description:
      "But I must explain to you how all this mistaken idea of denounci pleasure and paling was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    overview:
      "But I must explain to you how all this mistaken idea of denounci pleasure and paling was born and I will give you a complete account of the system and expound the actual teachings give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been give you a complete account of the system and expound the actual teachings the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been give you a complete account of the system and expound the actual teachings the industry.",
    contactLinks: [
      {
        id: 0,
        icon: faPhone,
        link: "+1 012 345 6789",
      },
      {
        id: 1,
        icon: faTty,
        link: "+44-208-1234567",
      },
      {
        id: 2,
        icon: faEnvelope,
        link: "mail@loyalcoder.com",
      },
    ],
    socialLinks: [
      {
        id: 0,
        icon: faFacebookF,
        link: "#",
      },
      {
        id: 1,
        icon: faInstagram,
        link: "#",
      },
      {
        id: 2,
        icon: faTwitter,
        link: "#",
      },
      {
        id: 3,
        icon: faLinkedinIn,
        link: "#",
      },
    ],
  },
];

export default data;
