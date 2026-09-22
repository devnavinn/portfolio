import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Navin Kumar — Full-Stack Developer & Freelance Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 26,
            color: "#38bdf8",
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          devnavin.in
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          Navin Kumar
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#e2e8f0",
            marginTop: 20,
          }}
        >
          Full-Stack Developer — Available for Freelance Work
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
          }}
        >
          {["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"].map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                fontSize: 22,
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#cbd5e1",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
