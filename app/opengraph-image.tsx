import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const alt = `${portfolioData.personal.name} — Portfolio`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#111114",
          padding: "80px",
          color: "#f4f4f6",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#2878f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: "24px"
            }}
          >
            TR
          </div>
          <span style={{ fontSize: "24px", color: "#a0a0a8", fontWeight: 600 }}>
            {portfolioData.personal.websiteUrl.replace("https://", "")}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-2px",
              margin: 0,
              color: "#ffffff"
            }}
          >
            {portfolioData.personal.name}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#9fc6ff",
              margin: 0,
              fontWeight: 500
            }}
          >
            {portfolioData.personal.title} · {portfolioData.personal.location}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #33333a",
            paddingTop: "32px",
            fontSize: "20px",
            color: "#77777e"
          }}
        >
          <span>BUILDING WHAT&apos;S NEXT</span>
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
