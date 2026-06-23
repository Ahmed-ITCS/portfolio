"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { CTAButton } from "@/components/shared/cta-button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-800 bg-slate-950 pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_260px] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="default" className="mb-5">
            Available for freelance & contract work
          </Badge>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:leading-tight">
            {siteConfig.headline}
          </h1>

          <p className="mt-2 text-lg font-medium text-blue-400">
            Lead Backend Engineer · Pentagon AI
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
            {siteConfig.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="#contact" size="lg">
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="#projects" variant="outline" size="lg">
              View My Work
            </CTAButton>
            <CTAButton
              href={siteConfig.links.calendly}
              variant="secondary"
              size="lg"
              external
            >
              <Calendar className="h-4 w-4" />
              Book a Call
            </CTAButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Python", "FastAPI", "AWS", "PostgreSQL", "AI/LLM"].map(
              (tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ),
            )}
          </div>

          <a
            href="/resume.pdf"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto flex flex-col items-center lg:mx-0"
        >
          <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-slate-800 ring-4 ring-blue-600/40 sm:h-60 sm:w-60">
            <Image
              src={siteConfig.profileImage}
              alt={siteConfig.name}
              width={240}
              height={240}
              className="h-full w-full object-cover object-top"
              priority
              unoptimized
            />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-slate-200">
            {siteConfig.name}
          </p>
          <p className="text-center text-xs text-slate-500">
            {siteConfig.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
