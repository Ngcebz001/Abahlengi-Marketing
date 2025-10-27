import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #2E5C4F 0%, #1C2A26 100%)",
          borderRadius: "9999px",
          color: "#F7F3E9",
          display: "flex",
          fontFamily: "Poppins, sans-serif",
          fontSize: 32,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          width: "100%",
        }}
      >
        AG
      </div>
    ),
    {
      ...size,
    }
  );
}
