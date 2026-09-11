import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "4rem 1rem" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Contact</p>
      <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: "1rem" }}>
        Get in Touch
      </h1>
      <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: "3rem" }}>
        Open to junior backend engineering, pipeline engineering, and applied AI engineering opportunities.
        I respond to direct, technical outreach.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
        {[
          { label: "GitHub", href: "https://github.com/vivekcyr25", desc: "Source code & repositories" },
          { label: "Repository — Internship Work", href: "https://github.com/vivekcyr25/frontend-ai-engineering-starter", desc: "FL-01 FlyRank internship project" },
        ].map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            background: "var(--color-surface)", border: "1px solid var(--color-border)",
            borderRadius: "8px", padding: "1.25rem",
            textDecoration: "none", transition: "border-color 0.15s",
          }}>
            <div>
              <p style={{ fontWeight: 600, color: "#f1f5f9", fontSize: "0.95rem", marginBottom: "0.25rem" }}>{item.label}</p>
              <p style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{item.desc}</p>
            </div>
            <span style={{ color: "var(--color-accent)", fontSize: "1.1rem" }}>↗</span>
          </a>
        ))}
      </div>

      <div style={{
        background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.15)",
        borderRadius: "8px", padding: "1.25rem",
      }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-accent)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Portfolio Context
        </p>
        <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>
          This portfolio is part of the FlyRank AI Internship assignment series.
          Review the <Link href="/work" style={{ color: "var(--color-accent)", textDecoration: "none" }}>technical case studies</Link> for
          full engineering context.
        </p>
      </div>
    </div>
  );
}
