import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-400">{description}</p>
      )}
    </div>
  );
}
