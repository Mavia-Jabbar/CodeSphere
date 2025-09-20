import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import logo from "./logo.png";

const Hero = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              🚀 Tech Orbit Academy
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>

            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Master Web Development with React And More
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              At Tech orbit , we empower beginners and students to become
              professional web developers. Learn React, modern web technologies,
              and industry best practices with hands-on training designed to
              launch your career in tech.
            </p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="#Form">Apply Now</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href="#coursesprizing">
                  View Courses
                  <ArrowRight className="size-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <img
            src={logo}
            alt="Students learning web development at Tech Orbit "
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
