import { ImageResponse } from "next/og";

export const alt =
  "Agent control plane for solopreneurs — Korux keeps AI agents under command";
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
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#F8F9FA",
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(192, 38, 211, 0.16), transparent 42%), radial-gradient(circle at 88% 78%, rgba(192, 38, 211, 0.1), transparent 40%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
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
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#111827",
              maxWidth: 980,
            }}
          >
            Agent control plane — for solopreneurs
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#6B7280",
              maxWidth: 900,
            }}
          >
            Inventory · policy · human approval · audit trail — without waiting for
            an enterprise fleet.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {["Governor", "HITL approve", "Scoped secrets", "Readable runs"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "12px 18px",
                  borderRadius: 999,
                  background: "rgba(192, 38, 211, 0.1)",
                  color: "#A21CAF",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
