import { ImageResponse } from "next/og";

export const alt = "Korux — Governed AI Workforce OS";export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#F8F9FA",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(192, 38, 211, 0.18), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C026D3",
          }}
        >
          Korux
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#111827",
            maxWidth: 900,
          }}
        >
          The Governed AI Workforce OS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#6B7280",
            maxWidth: 820,
          }}
        >
          AI agents with scoped secrets, confirmed workflows, and human approval
          before external side effects.
        </div>
      </div>
    ),
    { ...size },
  );
}
