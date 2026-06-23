"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-slate-800 bg-slate-950/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-slate-950/90 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-lg font-bold text-white">
          {siteConfig.name.split(" ")[0]}
          <span className="text-blue-400">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline-flex">
            <Button size="sm">Hire Me</Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-300 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {siteConfig.nav.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2"
            >
              <Button className="w-full">Hire Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
