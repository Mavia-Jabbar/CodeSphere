"use client";

import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CoursesPricing({
  heading = "Our Courses",
  description = "Choose a course and start your tech journey with Tech Orbit Academy",
  plans = [
    {
      id: "basic-coding",
      name: "Basic Coding",
      description: "Learn the foundations of coding",
      price: "PKR 2500 / month",
      note: "Per-month charges. Course duration depends on the student's pace.",
      features: [
        { text: "HTML, CSS, JavaScript basics" },
        { text: "Hands-on projects" },
        { text: "No prior coding knowledge required" },
      ],
      button: {
        text: "Apply Now",
        url: "#Form",
      },
    },
    {
      id: "web-dev",
      name: "Complete Web Development",
      description: "Frontend + backend mastery",
      price: "PKR 4000 / month",
      note: "Per-month charges. Course duration depends on the student's pace.",
      features: [
        { text: "HTML, CSS, JavaScript advanced" },
        { text: "React & modern frameworks (React, Router, State mgmt)" },
        { text: "Node.js, Express & databases (MongoDB)" },
        { text: "Deployment & hosting (Vercel) & CI/CD" },
        { text: "Full-stack real-world project building" },
      ],
      button: {
        text: "Apply Now",
        url: "#Form",
      },
    },
    {
      id: "ai",
      name: "AI Problem Solving & Prompt Engineering",
      description: "Harness the power of AI tools",
      price: "PKR 1500 / month",
      note: "Per-month charges. Course duration depends on the student's pace.",
      features: [
        { text: "Learn problem-solving with AI" },
        { text: "Prompt engineering best practices" },
        { text: "Hands-on AI project" },
      ],
      button: {
        text: "Apply Now",
        url: "#Form",
      },
    },
    {
      id: "wordpress-shopify",
      name: "WordPress & Shopify Development",
      description: "Build and manage websites & stores",
      price: "PKR 2500 / month",
      note: "Per-month charges. Course duration depends on the student's pace.",
      features: [
        { text: "WordPress customization" },
        { text: "Shopify store development" },
        { text: "Freelancing guidance" },
      ],
      button: {
        text: "Apply Now",
        url: "#Form",
      },
    },
    // NEW: E-commerce Guidance card added
    {
      id: "ecommerce-guidance",
      name: "E-commerce Guidance",
      description:
        "E-commerce store setup, Meta Ads, payment gateways & scaling strategies",
      price: "PKR 3500 / month",
      note: "Per-month charges. Course duration depends on the student's pace.",
      features: [
        { text: "Store setup (Shopify / WooCommerce / Custom)" },
        { text: "Meta (Facebook & Instagram) Ads setup & optimization" },
        { text: "Payment gateway integration & secure checkout" },
        { text: "Analytics, tracking (Pixel/GA) & scaling strategies" },
        { text: "Post-launch growth & conversion optimization" },
      ],
      button: {
        text: "Apply Now",
        url: "#Form",
      },
    },
  ],
}) {
  return (
    <section className="py-16" id="coursesprizing">
      <div className="container">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold text-pretty lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="flex flex-col justify-between text-left"
              >
                <CardHeader>
                  <CardTitle>
                    <p>{plan.name}</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-2 text-xl font-semibold text-slate-800">
                    {plan.price}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {plan.note}
                  </p>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheck className="size-4" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <a href={plan.button.url}>{plan.button.text}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
