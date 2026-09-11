import Link from "next/link";

const projects = [
  {
    slug: "video-restoration",
    title: "AI Video Restoration Pipeline",
    tags: ["Python", "PyTorch", "InsightFace", "Real-ESRGAN", "FFmpeg", "PySceneDetect"],
    problem: "Multi-face overlap distortion (the 'crayon effect') across scene transitions in event footage.",
    outcome: "Custom face-matcher using 512-dim InsightFace embeddings with scene-cut-aware ID reset logic eliminates cross-frame feature blending.",
    status: "Case Study Ready",
  },
  {
    slug: "aips",
    title: "AIPS — Academic Intelligence System",
    tags: ["Next.js", "TypeScript", "Groq API", "App Router"],
    problem: "Academic query assistants that expose API keys on the client and return out-of-domain responses.",
    outcome: "Backend-only proxied Groq API with structured context assembly and domain verification filter.",
    status: "Case Study Ready",
  },
  {
    slug: "ai-workflow",
    title: "AI-Assisted Engineering Workflow",
    tags: ["Git", "Prompt Engineering V0–V5", "Conventional Commits"],
    problem: "Naive AI prompting generates fabricated metrics and false architecture claims in engineering portfolios.",
    outcome: "Documented 5-stage prompt iteration framework eliminating all unverified claims with strict developer ownership.",
    status: "Case Study Ready",
  },
];

export default function WorkPage() {
  return (
    <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "4rem 1rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "var(--font-mono)", fontSize: "0.75rem",
          color: "var(--color-accent)", textTransform: "uppercase",
          letterSpacing: "0.1em", marginBottom: "0.75rem",
        }}>Case Studies</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", marginBottom: "0.75rem" }}>
          Engineering Work
        </h1>
        <p style={{ color: "var(--color-muted)", maxWidth: "540px", lineHeight: 1.7 }}>
          Three real engineering projects with documented constraints, architecture decisions, and verified outcomes.
          Zero fabricated metrics.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {projects.map((p, i) => (
          <article key={p.slug} style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "2rem",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem" }}>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                  color: "var(--color-muted)", marginBottom: "0.5rem",
                }}>
                  Project {String(i + 1).padStart(2, "0")}
                </p>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "0.75rem" }}>
                  {p.title}
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{
                      padding: "0.15rem 0.5rem",
                      background: "rgba(34,211,238,0.06)",
                      border: "1px solid rgba(34,211,238,0.15)",
                      borderRadius: "3px",
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
                      Problem
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.6 }}>{p.problem}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.35rem" }}>
                      Outcome
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.6 }}>{p.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                color: "#4ade80", letterSpacing: "0.06em",
              }}>● {p.status}</span>
              <Link href={`/work/${p.slug}`} style={{
                color: "var(--color-accent)", fontWeight: 600,
                textDecoration: "none", fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
              }}>
                Read case study →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
