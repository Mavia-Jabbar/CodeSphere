import { MenuIcon } from "lucide-react";
import logo from "./logo.png";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <section className="">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} className="max-h-16" alt="Shadcn UI Navbar" />
            <span className="text-lg font-semibold tracking-tighter">
              codeSphere
            </span>
          </a>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#courses"
                  className={navigationMenuTriggerStyle()}
                >
                  Courses
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#Form"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Apply Now Button (desktop) */}
          <div className="hidden lg:flex">
            <a href="#Form">
              <Button>Apply Now</Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="#" className="flex items-center gap-2">
                    <img
                      src={logo}
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      My Institute
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4 gap-6">
                <a href="#courses" className="font-medium">
                  Courses
                </a>
                <a href="#about" className="font-medium">
                  About
                </a>
                <a href="#Form" className="font-medium">
                  Contact
                </a>

                {/* Apply Now Button (mobile) */}
                <div className="mt-6">
                  <a href="#Form">
                    <Button>Apply Now</Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
