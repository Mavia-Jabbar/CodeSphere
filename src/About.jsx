import { Button } from "@/components/ui/button";
import logo from "./logo.png";
import banner from "./banner.jfif";
import founder from "./founder.jpeg";
import cofounder from "./cofounder.jpeg";

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

const defaultAchievements = [
  { label: "Students Trained", value: "100+" },
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

        {/* Founders Section */}
        <div className="py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Founder */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 rounded-xl border bg-muted/30 p-6 shadow-sm">
              <img
                src={founder} // replace with your imported founder image
                alt="Founder - Mavia Jabbar"
                className="w-40 h-40 rounded-full object-cover border-4 border-primary flex-shrink-0"
              />
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold">Founder</h3>
                <h5>Mavia Jabbar</h5>
                <p className="text-muted-foreground mt-2">
                  Founder of Tech Orbit Academy. Passionate about web
                  development, React, and building platforms that empower
                  students with hands-on projects. Mavia focuses on accessible
                  and affordable training that prepares learners for freelancing
                  and real-world jobs.
                </p>
                <Button asChild className="mt-4">
                  <a
                    href="https://your-portfolio-link.com" // replace with your portfolio link
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Portfolio
                  </a>
                </Button>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 rounded-xl border bg-muted/30 p-6 shadow-sm">
              <img
                src={cofounder} // replace with Ali's image import
                alt="Co-Founder - Ali Fahad"
                className="w-40 h-40 rounded-full object-cover border-4 border-primary flex-shrink-0"
              />
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold">Co-Founder</h3>
                <h5>Ali Fahad </h5>
                <p className="text-muted-foreground mt-2">
                  Co-Founder of Tech Orbit Academy. Ali manages the daily
                  operations of Tech Orbit, handles student records and data,
                  and ensures smooth communication with learners. He is
                  dedicated to providing students with guidance and support
                  throughout their journey.
                </p>
                <Button asChild className="mt-4">
                  <a
                    href="https://ali-portfolio-link.com" // replace with Ali's portfolio
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

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
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
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
