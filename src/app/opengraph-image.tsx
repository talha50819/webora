import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #172554 0%, #1d4ed8 55%, #0ea5e9 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            color: "white",
            letterSpacing: -2,
          }}
        >
          JSK Corporation
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Digital Agency for Web, Mobile, Design & Growth
        </div>
      </div>
    ),
    { ...size }
  );
}
