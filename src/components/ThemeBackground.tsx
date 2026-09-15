// src/components/ThemeBackground.tsx
export function ThemeBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-veil" />

      <div
        className="orb orb-a"
        style={{
          width: "55vmax", height: "55vmax", top: "-15%", left: "-10%",
          background: "radial-gradient(circle, var(--c-accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb orb-b"
        style={{
          width: "45vmax", height: "45vmax", top: "15%", right: "-15%",
          background: "radial-gradient(circle, var(--c-accent-2) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb orb-c"
        style={{
          width: "40vmax", height: "40vmax", bottom: "-20%", left: "30%",
          background: "radial-gradient(circle, var(--color-electric) 0%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 starfield" />
    </div>
  );
}