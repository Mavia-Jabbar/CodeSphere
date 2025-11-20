import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Validation Schema
const formSchema = z.object({
  name: z.string().min(1, "First name is required"),
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(5, "Enter a valid WhatsApp number"),
  email: z.string().email("Enter a valid email address"),
  course: z.string().min(1, "Please select your course"),
  certificate: z.boolean(), // ← only this one is optional
  techStack: z
    .string()
    .min(1, "Tell us what you know (write 'None' if beginner)"),
  bio: z
    .string()
    .min(10, "Write at least a short message about yourself")
    .max(500, "Bio too long (max 500 characters)"),
});

// Courses list
const courses = [
  { label: "Complete Web Development", value: "webdev" },
  { label: "Basic Coding (HTML, CSS, JS)", value: "coding" },
  { label: "AI Problem Solving & Prompt Engineering", value: "ai" },
  { label: "WordPress & Shopify Development", value: "wordpress-shopify" },
  { label: "E-commerce Guidance", value: "ecommerce" }, // ✅ new course
];

export default function CodeSphereForm(props) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      fullName: "",
      phone: "",
      email: "",
      course: "",
      certificate: false,
      techStack: "",
      bio: "",
    },
  });

  async function onSubmit(values) {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to send email");

      toast.success("✅ Application submitted — check your inbox!");
      props.showAlert(); // Show alert after successful email
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-b " id="Form">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold text-center text-slate-900">
            Tech Orbit Admission Form
          </h1>
          <p className="mb-10 text-slate-600 text-center max-w-2xl mx-auto">
            Apply now to kickstart your coding journey at{" "}
            <span className="font-semibold">Tech Orbit Academy</span>. Choose
            your course, enhance your skills, and earn a certificate! We would
            contact you on your whatsapp and then continue your course.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto py-10 px-6 bg-white rounded-2xl shadow-md text-left"
            >
              {/* First Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ayesha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ayesha Iqbal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter whatsapp number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        country={"pk"}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        inputClass="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Course Selection */}
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Your Course</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between text-left",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? courses.find((c) => c.value === field.value)
                                  ?.label
                              : "Choose a course"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search course..." />
                          <CommandList>
                            <CommandEmpty>No course found.</CommandEmpty>
                            <CommandGroup>
                              {courses.map((c) => (
                                <CommandItem
                                  value={c.label}
                                  key={c.value}
                                  onSelect={() =>
                                    form.setValue("course", c.value)
                                  }
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      c.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {c.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Certificate Switch */}
              <FormField
                control={form.control}
                name="certificate"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Certificate</FormLabel>
                      <FormDescription>
                        Do you want an official{" "}
                        <span className="font-semibold">
                          Tech Orbit Certificate
                        </span>{" "}
                        after completion?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Tech Stack */}
              <FormField
                control={form.control}
                name="techStack"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technologies You Already Know</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. HTML, CSS, React" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell Us About Yourself</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Why do you want to join Tech Orbit? Share your background and goals."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                className="px-6 py-2 text-base font-semibold"
                // onClick={props.showAlerts}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}
