import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  size?: "default" | "lg";
  className?: string;
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "default",
  size = "default",
  className,
  external,
}: CTAButtonProps) {
  const isExternal = external || href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href}>
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </a>
    );
  }

  return (
    <Link href={href}>
      <Button variant={variant} size={size} className={cn(className)}>
        {children}
      </Button>
    </Link>
  );
}
