export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Curious Learner with deep love for Tech",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with working on different technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for Development & Engineering",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Cool JS projects",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Leetcode Clone",
    des: "Built using Next.js, Firebase, CodeMirror. Solve DSA problems using Javascript language.",
    img: "/LeetCode-Clone.jpeg",
    iconLists: ["/next.svg", "/firebase.svg", "/ts.svg", "/tail.svg"],
    link: "https://leetcode-clone-93p4gqkra-rohitrk185s-projects.vercel.app",
  },
  {
    id: 2,
    title: "Figma Clone using Liveblocks",
    des: "Interactive Design App Built using Next.js, Liveblocks, Fabric.js, Tailwind CSS",
    img: "/Figma-Clone.jpeg",
    iconLists: ["/next.svg", "/liveblocks.svg", "/tail.svg", "/ts.svg"],
    link: "https://figma-clone-5yib2hqu8-rohitrk185s-projects.vercel.app",
  },
  {
    id: 3,
    title: "Photo Library using Cloudinary",
    des: "A Image Library with editing options using Cloudinary AI, collage creation etc...",
    img: "/Cloudinary-Photos.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://cloudinary-pic-7igq8xtsp-rohitrk185s-projects.vercel.app",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern @MyLang",
    duration: "(January - June 2023)",
    desc: "Assisted in the development of a Audio Stories platform in Next.js, adding features.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    tech: "Next.js, Firebase",
  },
  {
    id: 2,
    title: "Software Developer @MyLang",
    duration: "(June - Currently Working)",
    desc: "Worked on handling key features of multiple products including Web App, Android App, an AI app which converts books into Audiobooks with immersion.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    tech: "Next.js, Firebase, Kotlin, Flask, PostgreSQL, GCP, AWS",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
