"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/content/site";
import { Mail, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          projectType: formData.get("projectType"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  return (
    <section id="contact" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            label="Contact"
            title="Let's Build Something"
            description="Have a project in mind? Reach out for freelance work, consulting, or custom development."
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="hidden" aria-hidden="true">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="flex h-11 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus-visible:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/20"
                >
                  <option value="">Select a service</option>
                  <option value="backend">Backend & API Development</option>
                  <option value="saas">SaaS Development</option>
                  <option value="ai">AI / LLM Integration</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="erp">ERP Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project, timeline, and goals..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage}
                </p>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-slate-100">Direct Contact</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-slate-600 hover:text-blue-400 text-slate-400"
                    >
                      <Mail className="h-5 w-5 text-blue-600" />
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-slate-600 hover:text-blue-400 text-slate-400"
                    >
                      <Phone className="h-5 w-5 text-blue-600" />
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-600 hover:text-blue-400 text-slate-400"
                    >
                      <LinkedInIcon className="h-5 w-5 text-blue-600" />
                      LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-600 hover:text-blue-400 text-slate-400"
                    >
                      <GitHubIcon className="h-5 w-5 text-blue-600" />
                      GitHub Profile
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100">Book a Call</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Schedule a free 30-minute discovery call to discuss your
                  project.
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
                  <iframe
                    src={siteConfig.links.calendly}
                    title="Schedule a call"
                    className="h-[500px] w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
