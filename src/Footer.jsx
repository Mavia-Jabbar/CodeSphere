import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        {/* Top section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary">
              CodeSphere Academy
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Empowering beginners with real-world coding skills.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#courses" className="hover:text-primary">
              Courses
            </a>
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#Form" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-6" />

        {/* Bottom copyright */}
        <div className="text-center text-xs text-muted-foreground">
          © 2025 CodeSphere Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
