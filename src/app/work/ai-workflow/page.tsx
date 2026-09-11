import Link from "next/link";

const stages = [
  { v: "V0", name: "Naive Baseline", added: "No constraints", result: "Generic marketing claims, fabricated metrics", gap: "No audience targeting or proof boundaries" },
  { v: "V1", name: "Role Assignment", added: "Engineering hiring audience framing", result: "More technical tone", gap: "Still assumed library behaviors without evidence" },
  { v: "V2", name: "Verified Context Injection", added: "Constrained to verified tools only", result: "No invented tools", gap: "Lacked clear structural organization" },
  { v: "V3", name: "Few-Shot Grounding", added: "BAD vs. GOOD writing examples", result: "Improved phrasing", gap: "Output still disorganized" },
  { v: "V4", name: "Fixed Output Schema", added: "Problem / What I Did / What Came Of It", result: "Structurally clean", gap: "Still tempted to extrapolate unverified outcomes" },
  { v: "V5", name: "Step Decomposition", added: "Internal verification check before drafting; no unverified metrics", result: "Acknowledged VRAM constraints; zero fabricated metrics", gap: "None — passed quality audit" },
];

export default function WorkflowPage() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 1rem" }}>
      <Link href="/work" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem", marginBottom: "2.5rem" }}>
        ← Work
      </Link>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Case Study 03</p>
      <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.2, marginBottom: "2.5rem" }}>
        AI-Assisted Engineering Workflow
      </h1>

      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>The Problem</h2>
        <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
          Naive prompting consistently generates generic, fabricated marketing claims — "cutting-edge AI", "10x performance improvements" —
          that destroy engineering portfolio credibility during technical hiring reviews.
        </p>
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
          5-Stage Prompt Iteration (V0 → V5)
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {stages.map((s) => (
            <div key={s.v} style={{
              background: s.v === "V5" ? "rgba(74,222,128,0.04)" : "var(--color-surface)",
              border: s.v === "V5" ? "1px solid rgba(74,222,128,0.25)" : "1px solid var(--color-border)",
              borderRadius: "8px", padding: "1rem 1.25rem",
              display: "grid", gridTemplateColumns: "60px 1fr 1fr", gap: "1rem", alignItems: "start",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.85rem", color: s.v === "V5" ? "#4ade80" : "var(--color-accent)" }}>{s.v}</span>
              <div>
                <p style={{ fontWeight: 600, color: "#f1f5f9", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{s.name}</p>
                <p style={{ color: "#64748b", fontSize: "0.8rem" }}>Added: {s.added}</p>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "0.25rem" }}>Result: {s.result}</p>
              </div>
              <p style={{ color: s.v === "V5" ? "#4ade80" : "#64748b", fontSize: "0.8rem" }}>
                {s.v === "V5" ? "✓ " : "Gap: "}{s.gap}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Developer Ownership Rules</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            "AI is used for drafting and debugging assistance only. The developer retains 100% responsibility for architecture decisions, logic correctness, and Git hygiene.",
            "Every code modification follows Conventional Commits and passes local test verification prior to pushing.",
            "No metric, benchmark, or outcome is published without direct observable evidence from the codebase.",
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontSize: "0.8rem", flexShrink: 0 }}>{String(i+1).padStart(2,"0")}.</span>
              <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.875rem" }}>{r}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
