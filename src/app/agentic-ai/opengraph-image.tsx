import { ImageResponse } from "next/og";

export const alt = "What is agentic AI? — Korux guide";
export const size = { width: 1200, height: 630 };
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
          padding: "64px 72px",
          background: "#F8F9FA",
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(192, 38, 211, 0.18), transparent 44%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C026D3",
          }}
        >
          Korux · Guide
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#111827",
            maxWidth: 960,
          }}
        >
          What is agentic AI?
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#6B7280",
            maxWidth: 880,
          }}
        >
          Multi-step action — with guardrails and a human still holding send.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            gap: 14,
            fontSize: 22,
            color: "#374151",
            fontWeight: 600,
          }}
        >
          <span>Describe</span>
          <span style={{ color: "#C026D3" }}>{"->"}</span>
          <span>Confirm Spec</span>
          <span style={{ color: "#C026D3" }}>{"->"}</span>
          <span>Governor pause</span>
          <span style={{ color: "#C026D3" }}>{"->"}</span>
          <span>You decide</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
