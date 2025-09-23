import {
  Code,
  Globe,
  Palette,
  LayoutGrid,
  FileCode,
  Bot,
  MessageSquare,
  Award,
  Github,
  Cloud,
  Users,
  Rocket,
  ShoppingCart, // ✅ added
  PenTool, // ✅ added
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Courses = () => {
  return (
    <section className="py-32" id="courses">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
            What we are providing
          </h1>

          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* HTML & CSS */}
            <Card>
              <CardHeader className="pb-1">
                <FileCode className="size-6 text-blue-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">HTML & CSS</h2>
                <p className="leading-snug text-muted-foreground">
                  Learn the fundamentals of building modern websites with HTML &
                  CSS.
                </p>
              </CardContent>
            </Card>

            {/* WordPress & Shopify */}
            <Card>
              <CardHeader className="pb-1">
                <Globe className="size-6 text-green-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  WordPress & Shopify
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Create professional eCommerce & business websites with
                  WordPress and Shopify.
                </p>
              </CardContent>
            </Card>

            {/* ShadcnUI & Bootstrap */}
            <Card>
              <CardHeader className="pb-1">
                <LayoutGrid
                  className="size-6 text-pink-500"
                  strokeWidth={1.5}
                />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  ShadcnUI & Bootstrap
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Build beautiful UI faster with modern libraries and
                  frameworks.
                </p>
              </CardContent>
            </Card>

            {/* Tailwind CSS */}
            <Card>
              <CardHeader className="pb-1">
                <Palette className="size-6 text-purple-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Tailwind CSS</h2>
                <p className="leading-snug text-muted-foreground">
                  Master utility-first CSS for rapid responsive design.
                </p>
              </CardContent>
            </Card>

            {/* JavaScript */}
            <Card>
              <CardHeader className="pb-1">
                <Code className="size-6 text-yellow-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">JavaScript</h2>
                <p className="leading-snug text-muted-foreground">
                  Learn JavaScript from basics to advanced problem-solving
                  skills.
                </p>
              </CardContent>
            </Card>

            {/* AI Problem Solving */}
            <Card>
              <CardHeader className="pb-1">
                <Bot className="size-6 text-cyan-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  AI Problem Solving
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Use AI tools and frameworks to solve real-world problems
                  efficiently.
                </p>
              </CardContent>
            </Card>

            {/* Prompt Engineering */}
            <Card>
              <CardHeader className="pb-1">
                <MessageSquare
                  className="size-6 text-indigo-500"
                  strokeWidth={1.5}
                />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  Prompt Engineering
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Learn how to write effective prompts to get the best out of AI
                  models.
                </p>
              </CardContent>
            </Card>

            {/* E-commerce Guidance */}
            <Card>
              <CardHeader className="pb-1">
                <ShoppingCart
                  className="size-6 text-emerald-500"
                  strokeWidth={1.5}
                />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  E-commerce Guidance
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Step-by-step guidance to launch and manage your own online
                  store successfully.
                </p>
              </CardContent>
            </Card>

            {/* UI/UX Designing */}
            <Card>
              <CardHeader className="pb-1">
                <PenTool
                  className="size-6 text-fuchsia-500"
                  strokeWidth={1.5}
                />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">UI/UX Designing</h2>
                <p className="leading-snug text-muted-foreground">
                  Learn design principles and tools to create user-friendly and
                  visually stunning digital products.
                </p>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card>
              <CardHeader className="pb-1">
                <Award className="size-6 text-orange-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">Certification</h2>
                <p className="leading-snug text-muted-foreground">
                  Students completing our courses will receive an official
                  certificate.
                </p>
              </CardContent>
            </Card>

            {/* Vercel Deployment */}
            <Card>
              <CardHeader className="pb-1">
                <Cloud className="size-6 text-sky-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  Vercel Deployment
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Learn how to deploy and host your projects with Vercel for
                  free and production-ready CI/CD.
                </p>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader className="pb-1">
                <Users className="size-6 text-pink-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  Soft Skills for Developers
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Improve communication, portfolio building, and resume writing
                  to stand out in the job market.
                </p>
              </CardContent>
            </Card>

            {/* AI-assisted Coding */}
            <Card>
              <CardHeader className="pb-1">
                <Bot className="size-6 text-teal-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  AI-assisted Coding
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Use tools like GitHub Copilot and ChatGPT to code faster and
                  smarter with AI support.
                </p>
              </CardContent>
            </Card>

            {/* Freelancer Launch Program */}
            <Card>
              <CardHeader className="pb-1">
                <Rocket className="size-6 text-orange-500" strokeWidth={1.5} />
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">
                  Freelancer Launch Program
                </h2>
                <p className="leading-snug text-muted-foreground">
                  Step-by-step guidance on building profiles, getting first
                  clients, and growing as a freelancer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
