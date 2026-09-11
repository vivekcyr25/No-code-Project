import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 1rem" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>About</p>
      <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: "2rem" }}>Vivek Sharma</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem" }}>
          I am a B.Tech CSE student specialising in backend engineering, multimedia pipeline automation, and applied AI integration.
          My engineering work focuses on solving real processing bottlenecks — not theoretical optimisations.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem" }}>
          The <strong style={{ color: "#f1f5f9" }}>AI Video Restoration Pipeline</strong> demonstrates my ability to chain multiple Python AI models
          (PyTorch, InsightFace, Real-ESRGAN, FFmpeg) while solving a concrete visual artifact problem
          — multi-face overlap across scene transitions — through custom frame-matching logic rather than off-the-shelf solutions.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem" }}>
          I take AI-assisted development seriously as a discipline: treating AI as an accelerating collaborator
          while maintaining strict developer ownership over architecture, verification, and commit hygiene.
        </p>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Technical Focus</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[
            "Python multimedia pipeline engineering",
            "PyTorch model integration & chaining",
            "FFmpeg audio/video processing",
            "Next.js App Router & TypeScript",
            "Backend API security architecture",
            "AI-assisted development workflow",
          ].map((item) => (
            <div key={item} style={{
              background: "var(--color-surface)", border: "1px solid var(--color-border)",
              borderRadius: "8px", padding: "0.85rem",
              fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.5,
            }}>
              <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", marginRight: "0.4rem" }}>→</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/work" style={{
          padding: "0.75rem 1.25rem", background: "var(--color-accent)",
          color: "#030712", fontWeight: 700, borderRadius: "8px",
          textDecoration: "none", fontSize: "0.875rem",
        }}>
          View Case Studies
        </Link>
        <Link href="/contact" style={{
          padding: "0.75rem 1.25rem", border: "1px solid var(--color-border)",
          color: "var(--color-text)", fontWeight: 500, borderRadius: "8px",
          textDecoration: "none", fontSize: "0.875rem",
        }}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
