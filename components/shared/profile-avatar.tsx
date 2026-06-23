"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type ProfileAvatarProps = {
  size?: "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  md: { box: "h-28 w-28", text: "text-2xl", px: 112 },
  lg: { box: "h-40 w-40", text: "text-4xl", px: 160 },
  xl: { box: "h-52 w-52 sm:h-60 sm:w-60", text: "text-5xl", px: 240 },
};

export function ProfileAvatar({ size = "lg", className }: ProfileAvatarProps) {
  const [failed, setFailed] = useState(false);
  const s = sizes[size];

  if (failed) {
    return (
      <div
        className={cn(
          "profile-ring flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 font-bold text-white",
          s.box,
          s.text,
          className,
        )}
      >
        {siteConfig.initials}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "profile-ring relative overflow-hidden rounded-full",
        s.box,
        className,
      )}
    >
      <Image
        src={siteConfig.profileImage}
        alt={siteConfig.name}
        width={s.px}
        height={s.px}
        className="h-full w-full scale-110 object-cover object-[center_20%]"
        priority
        unoptimized
        onError={() => setFailed(true)}
      />
    </div>
  );
}
