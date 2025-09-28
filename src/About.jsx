import { Button } from "@/components/ui/button";
import logo from "./logo.png";
import banner from "./banner.jfif";
import founder from "./founder.jpeg";
import cofounder from "./cofounder.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import Huzaifa from "./Huzaifa.jpeg";
import cofounderSA from "./cofounderSA.jpeg";

const defaultCompanies = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "TailwindCSS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "HTML5",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    alt: "Git",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "Node.js",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    alt: "MongoDB",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3",
  },
];

const members = [
  {
    role: "Founder",
    name: "Mavia Jabbar",
    img: founder,
    desc: "Founder of Tech Orbit Academy. Passionate about building platforms that empower learners.",
    link: "https://maviajabbar.vercel.app/",
    borderColor: "border-blue-900", // navy blue
    hoverBg: "hover:bg-blue-900 hover:text-white",
    cardColor: "bg-transparent",
  },
  // {
  //   role: "Co-Founder",
  //   name: "Ali Fahad",
  //   img: "/cofounder.jpg",
  //   desc: "Co-Founder managing daily operations, ensuring smooth communication with students.",
  //   link: "#",
  //   borderColor: "border-blue-900",
  //   hoverBg: "hover:bg-blue-900 hover:text-white",
  //   cardColor: "bg-transparent",
  // },
  {
    role: "Co Founder in Nigeria",
    name: "Matthew Michael",
    img: cofounderSA,
    desc: "Leads our international branch in Nigeria with a focus on global opportunities.",
    link: "https://lilprince.vercel.app/",
    borderColor: "border-[#4CC552]", // parrot green border
    hoverBg: "hover:bg-[#4CC552] hover:text-white",
    // cardColor: "bg-green-100", // greenish background?
  },
  {
    role: "Affiliate",
    name: "Huzaifa Memon",
    img: Huzaifa,
    desc: "Handles affiliate partnerships and expands Tech Orbit’s reach worldwide.",
    link: "https://www.instagram.com/huzaifa62811/",
    borderColor: "border-blue-900",
    hoverBg: "hover:bg-blue-900 hover:text-white",
    cardColor: "bg-transparent",
  },
  // {
  //   role: "Dev-Mentor",
  //   name: "Ahmed Raza",
  //   img: "/mentor.jpg",
  //   desc: "Guides students in React and modern development practices with hands-on mentorship.",
  //   link: "#",
  //   borderColor: "border-blue-900",
  //   hoverBg: "hover:bg-blue-900 hover:text-white",
  //   cardColor: "bg-transparent",
  // },
  // {
  //   role: "Manager",
  //   name: "Fatima Ali",
  //   img: "/manager.jpg",
  //   desc: "Oversees organizational tasks and ensures smooth workflow across departments.",
  //   link: "#",
  //   borderColor: "border-blue-900",
  //   hoverBg: "hover:bg-blue-900 hover:text-white",
  //   cardColor: "bg-transparent",
  // },
];

const defaultAchievements = [
  { label: "Certificate Issued", value: "20+" },
  { label: "Projects Completed", value: "60+" },
  { label: "Student Satisfaction", value: "98%" },
  { label: "Certificates Awarded", value: "Yes 🎓" },
];

const About = () => {
  return (
    <section className="py-32" id="about">
      <div className="container">
        {/* Title + Description */}
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">
            About Tech Orbit <br /> Academy
          </h1>
          <p className="text-muted-foreground">
            At Tech Orbit, we believe quality education should be accessible to
            everyone. Our mission is to provide authentic web development
            training from React to full-stack development at reasonable prices.
            We focus on helping beginners and students build real skills that
            lead to real opportunities. Every student who completes a course
            receives an official certificate, adding weight to their portfolio
            and career journey.
          </p>
        </div>
        {/* Main Images */}
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={banner}
            alt="Students learning web development at Tech Orbit "
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />

          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img src={logo} alt="Tech Orbit  logo" className="mr-auto h-12" />
              <div>
                <p className="mb-2 text-lg font-semibold">
                  Our Promise to Students
                </p>
                <p className="text-muted-foreground">
                  We’re not just another academy. We ensure that every student
                  gets authentic, practical knowledge and guidance at affordable
                  prices preparing them for freelancing, jobs, and startups.
                  Plus, all graduates are awarded certificates to showcase their
                  skills.
                </p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href="#courses">Explore Courses</a>
              </Button>
            </div>
            <img
              src={logo}
              alt="Tech Orbit students"
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        {/* Technologies/Partners */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center">
            Powered by Modern Technologies
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-12">
            {defaultCompanies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-14 w-auto" // 👉 bigger logos
                />
              </div>
            ))}
          </div>
        </div>
        {/* TEAM SECTION */}
        <section className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, idx) => (
              <Card
                key={idx}
                className={`shadow-none border-none flex flex-col items-center text-center hover:scale-105 transition-transform ${member.cardColor}`}
              >
                <CardContent className="flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.role}
                    className={`w-28 h-28 rounded-full object-cover mb-4 border-4 ${member.borderColor}`}
                  />
                  <h3 className="text-xl font-bold text-center mt-1 ">
                    {member.role}
                  </h3>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl font-semibold text-black px-3 py-1 rounded-md transition-colors duration-300 ${member.hoverBg}`}
                  >
                    {member.name}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {member.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Achievements */}
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">Our Achievements</h2>
            <p className="max-w-xl text-muted-foreground">
              Step by step, we’re shaping the future of web development
              education making it practical, affordable, and student focused.
              Our certifications ensure students have proof of their hard earned
              skills.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-around gap-10 text-center">
            {defaultAchievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
