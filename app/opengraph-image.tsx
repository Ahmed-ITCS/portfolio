import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: "#93c5fd",
          marginBottom: 16,
        }}
      >
        Software Engineer
      </div>
      <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
        {siteConfig.name}
      </div>
      <div
        style={{
          fontSize: 28,
          marginTop: 24,
          color: "#cbd5e1",
          maxWidth: 700,
        }}
      >
        Backend, APIs, Cloud & AI — Building scalable SaaS systems
      </div>
    </div>,
    { ...size },
  );
}
