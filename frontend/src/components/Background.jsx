import React from "react";

function Background({ isDark }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
            radial-gradient(60% 60% at 50% 18%, rgba(255, 107, 0, 0.18), rgba(255,107,0,0) 70%),
            linear-gradient(to right, ${
              isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)"
            } 1px, transparent 1px),
            linear-gradient(to bottom, ${
              isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)"
            } 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 24px 24px, 24px 24px",
          backgroundPosition: "center, 0 0, 0 0",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 45%, #000 65%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(120% 90% at 50% 45%, #000 65%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
}

export default Background;
