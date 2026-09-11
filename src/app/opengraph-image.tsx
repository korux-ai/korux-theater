import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Korux story: Staff ready → describe → Spec → Governor pause → you decide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFrame(name: string) {
  const file = await readFile(
    path.join(process.cwd(), "public", "demo-story", name),
  );
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [staff, describe, approve] = await Promise.all([
    loadFrame("01-staff-og.jpg"),
    loadFrame("02-describe-og.jpg"),
    loadFrame("06-approve-og.jpg"),
  ]);

  const panels = [
    { src: staff, label: "01 Staff" },
    { src: describe, label: "02 Describe" },
    { src: approve, label: "05 Decide" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 56px 44px",
          background: "#F8F9FA",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(192, 38, 211, 0.16), transparent 40%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C026D3",
            }}
          >
            Korux · See the problem
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 42,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#111827",
              maxWidth: 980,
            }}
          >
            Agents draft the email. You still hold send.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, marginTop: 28 }}>
          {panels.map((panel) => (
            <div
              key={panel.label}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                border: "1px solid #E5E7EB",
                borderRadius: 16,
                overflow: "hidden",
                background: "#FFFFFF",
              }}
            >
              <img
                src={panel.src}
                alt=""
                width={340}
                height={212}
                style={{
                  width: "100%",
                  height: 212,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              <div
                style={{
                  display: "flex",
                  padding: "12px 14px",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                {panel.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 22,
            color: "#6B7280",
          }}
        >
          Describe {"->"} Confirm Spec {"->"} Governor pause {"->"} Approve / Reject
        </div>
      </div>
    ),
    { ...size },
  );
}
