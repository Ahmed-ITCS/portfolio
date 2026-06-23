import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Products } from "@/components/sections/products";
import { Freelance } from "@/components/sections/freelance";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Products />
      <Freelance />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}
