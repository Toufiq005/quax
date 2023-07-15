import {
  faPenToSquare,
  faLightbulb,
  faDesktop,
  faPieChart,
  faHeadphones,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 0,
    title: "Your business find SEO Solutions",
    headLineOne:
      "Me old mucker knackered a load of old tosh wellies amongst lost the plot.!",
    headLineTwo: "Join over 100+ real people who have worked with us",
    btn: {
      text: "PURCHASE NOW",
      href: "#",
    },
    imgOne: {
      src: "/assets/home-two/hero-img.webp",
      alt: "hero-img",
    },
    imgTwo: {
      src: "/assets/home-two/hero-card.svg",
      alt: "hero-card",
    },
  },
  {
    id: 1,
    title: "How we can level up your business",
    headLineOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.",
    headLineTwo: "Join 400+ other companies who switched",
    aboutData: [
      {
        id: 0,
        name: "Idea & Concept",
        title: "Lorem ipsum dolor sit amet, consectetur...",
        href: "#",
        img: "/assets/home-two/about/about-top-image.webp",
        icon: faPenToSquare,
      },
      {
        id: 1,
        name: "Infrastructure Plan",
        title: "Lorem ipsum dolor sit amet, consectetur...",
        href: "#",
        img: "/assets/home-two/about/about-top-image.webp",
        icon: faLightbulb,
      },
      {
        id: 2,
        name: "Desktop Computing",
        title: "Lorem ipsum dolor sit amet, consectetur...",
        href: "#",
        img: "/assets/home-two/about/about-top-image.webp",
        icon: faDesktop,
      },
      {
        id: 3,
        name: "UI Kit Template",
        title: "Lorem ipsum dolor sit amet, consectetur...",
        href: "#",
        img: "/assets/home-two/about/about-top-image.webp",
        icon: faPieChart,
      },
      {
        id: 4,
        name: "Support & Secure",
        title: "Lorem ipsum dolor sit amet, consectetur...",
        href: "#",
        img: "/assets/home-two/about/about-top-image.webp",
        icon: faHeadphones,
      },
    ],
    companies: [
      {
        id: 1,
        name: "WordPress",
        icon: "/assets/home-two/about/word-press.svg",
        href: "#",
      },
      {
        id: 2,
        name: "WooCommerce",
        icon: "/assets/home-two/about/woo-commerce.svg",
        href: "#",
      },
      {
        id: 3,
        name: "Envato",
        icon: "/assets/home-two/about/envato.svg",
        href: "#",
      },
      {
        id: 4,
        name: "CitiBank",
        icon: "/assets/home-two/about/citibank.svg",
        href: "#",
      },
      {
        id: 5,
        name: "Magneto",
        icon: "/assets/home-two/about/magneto.svg",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    title: "What people Think about company",
    headLine:
      "Owt to do with me jolly good a cheers barmy arse over tit you mug say the little rotter, pukka cack pardon me golly gosh what a load.!",
    details: [
      {
        id: 0,
        numOne: 8,
        numTwo: 44,
        title: "Increase in monthly",
        icon: faArrowUp,
        color: "rgba(42, 197, 72, 1)",
      },
      {
        id: 1,
        numOne: 1,
        numTwo: 8,
        title: "Decrease in yearly",
        icon: faArrowDown,
        color: "rgba(251, 44, 72, 1)",
      },
    ],
    btn: {
      text: "ANALYZE WEBSITE",
      href: "#",
    },
    imgOne: {
      src: "/assets/home-two/about/about-image-one.webp",
      alt: "about-image",
    },
    imgTwo: {
      src: "/assets/home-two/about/about-card-one.webp",
      alt: "card",
    },
  },
  {
    id: 3,
    title: "We're the perfect local business assists",
    discription:
      "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English",
    headLine: "Need Help? Talk to An Expert",
    phoneNumber: "+1-844-562-6896",
    from: {
      title: "Get Free SEO Analysis?",
      inputs: [
        {
          id: 0,
          title: "Full Name",
        },
        {
          id: 1,
          title: "Email",
        },
        {
          id: 2,
          title: "Website",
        },
      ],
      btn: {
        text: "SEND MESSAGE",
      },
    },
  },
  {
    id: 4,
    title: "How we can level up your business",
    headLine:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.",
    imgOne: {
      src: "/assets/home-two/how-it-works/how-it-works-card-one.png",
      alt: "card one",
    },
    imgTwo: {
      src: "/assets/home-two/how-it-works/how-it-works-card-two.png",
      alt: "card two",
    },
    imgThree: {
      src: "/assets/home-two/how-it-works/how-it-works-card-three.png",
      alt: "card tree",
    },
    imgFour: {
      src: "/assets/home-two/how-it-works/how-it-works-card-four.png",
      alt: "card four",
    },
    data: [
      {
        id: 0,
        name: "SEND MESSAGE",
        title: "It's all about The people, and process",
        points: {
          1: "Analyze the date",
          2: "Create template",
          3: "SEO Content Strategy",
          4: "Content Marketing",
          5: "Flexible and responsive",
        },
        btn: {
          text: "TRY SEO TOOLKIT",
          href: "#",
        },
      },
      {
        id: 1,
        name: "SEO",
        title: "It's all about The people, and process",
        points: {
          1: "Analyze the date",
          2: "Create template",
          3: "SEO Content Strategy",
          4: "Content Marketing",
          5: "Flexible and responsive",
        },
        btn: {
          text: "TRY SEO TOOLKIT",
          href: "#",
        },
      },
      {
        id: 2,
        name: "WEB MONITORING",
        title: "It's all about The people, and process",
        points: {
          1: "Analyze the date",
          2: "Create template",
          3: "SEO Content Strategy",
          4: "Content Marketing",
          5: "Flexible and responsive",
        },
        btn: {
          text: "TRY SEO TOOLKIT",
          href: "#",
        },
      },
      {
        id: 3,
        name: "RESEARCH",
        title: "It's all about The people, and process",
        points: {
          1: "Analyze the date",
          2: "Create template",
          3: "SEO Content Strategy",
          4: "Content Marketing",
          5: "Flexible and responsive",
        },
        btn: {
          text: "TRY SEO TOOLKIT",
          href: "#",
        },
      },
    ],
  },
  {
    id: 5,
    data: [
      {
        id: 1,
        numbers: 104,
        name: "Happy Quantum Usars",
        icon: "/assets/home-two/testimonial/testimonial-two-happy-face.svg",
      },
      {
        id: 2,
        numbers: 306,
        name: "Successfull Projects",
        icon: "/assets/home-two/testimonial/testimonial-two-successful-projects.svg",
      },
      {
        id: 3,
        numbers: 208,
        name: "Positive Feedback",
        icon: "/assets/home-two/testimonial/testimonial-two-positive-feedback.svg",
      },
      {
        id: 4,
        numbers: 440,
        name: "Positive Feedback",
        icon: "/assets/home-two/testimonial/testimonial-two-blog-post.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Simple Scalable Pricing.",
    headLine: "Lorem ipsum dolor sit amet, consectur adipiscing elit.",
    data: [
      {
        id: 0,
        plan: "STARTER PLAN",
        title:
          "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
        link: "/",
        price: "$0",
        bulletPoint: {
          1: "10 hours of support",
          2: "Advanced analytic",
          3: "Free hosting",
          4: "A Dedicated Domain",
          5: "2GB of storage space",
        },
      },
      {
        id: 1,
        plan: "REGULAR PLAN",
        title:
          "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
        link: "/",
        price: "$50",
        bulletPoint: {
          1: "Unlimited of support",
          2: "Advanced analytic",
          3: "Free hosting",
          4: "1 Dedicated Domain",
          5: "10GB of storage space",
        },
      },
      {
        id: 2,
        plan: "PREMIUM PLAN",
        title:
          "Bunc id tincidunt duis faucibus urna Adipiscing. Id lorem diam.",
        link: "/",
        price: "$100",
        bulletPoint: {
          1: "Unlimited of support",
          2: "Advanced analytic",
          3: "Free hosting",
          4: "2 Dedicated Domain",
          5: "20GB of storage space",
        },
      },
    ],
  },
];

export default data;
