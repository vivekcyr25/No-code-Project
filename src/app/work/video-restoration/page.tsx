import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: "3rem" }}>
    <h2 style={{
      fontSize: "0.75rem", fontFamily: "var(--font-mono)",
      color: "var(--color-accent)", textTransform: "uppercase",
      letterSpacing: "0.1em", marginBottom: "0.75rem",
    }}>{title}</h2>
    {children}
  </div>
);

const Tag = ({ children }: { children: string }) => (
  <span style={{
    padding: "0.2rem 0.6rem",
    background: "rgba(34,211,238,0.07)",
    border: "1px solid rgba(34,211,238,0.2)",
    borderRadius: "4px",
    fontSize: "0.72rem", fontFamily: "var(--font-mono)",
    color: "var(--color-accent)",
  }}>{children}</span>
);

export default function VideoRestorationPage() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 1rem" }}>
      <Link href="/work" style={{
        fontFamily: "var(--font-mono)", fontSize: "0.8rem",
        color: "var(--color-muted)", textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: "0.35rem",
        marginBottom: "2.5rem",
      }}>← Work</Link>

      <div style={{ marginBottom: "3rem" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
          Case Study 01
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.2, marginBottom: "1rem" }}>
          AI Video Restoration Pipeline
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {["Python", "PyTorch", "InsightFace", "Real-ESRGAN", "FFmpeg", "PySceneDetect", "ONNX Runtime"].map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>

      <Section title="The Problem">
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem" }}>
          Older wedding and event footage processed with standard super-resolution models (e.g., Real-ESRGAN) produces
          a severe temporal distortion artifact: <strong style={{ color: "#f1f5f9" }}>multi-face overlap across scene transitions</strong>,
          colloquially called the <strong style={{ color: "#f1f5f9" }}>&quot;crayon effect&quot;</strong>.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem", marginTop: "0.75rem" }}>
          When a camera cuts between subjects, models that lack scene-cut awareness blend facial features
          from the outgoing frame into the incoming frame — producing a ghosted, multi-face distortion
          that makes subjects appear to blend into each other.
        </p>
      </Section>

      <Section title="Pipeline Architecture">
        <div style={{
          background: "var(--color-surface)", border: "1px solid var(--color-border)",
          borderRadius: "8px", overflow: "hidden",
        }}>
          <div style={{
            background: "#0a0f1d", borderBottom: "1px solid var(--color-border)",
            padding: "0.6rem 1rem",
            display: "flex", alignItems: "center", gap: "0.5rem",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)" }}>
              pipeline.dataflow
            </span>
          </div>
          <pre style={{
            padding: "1.5rem", fontFamily: "var(--font-mono)",
            fontSize: "0.8rem", color: "#94a3b8", lineHeight: 2,
            overflowX: "auto",
          }}>{`[ Raw Input Video ]
        │
        ▼
1. PySceneDetect  ──► Detects shot transitions & hard cuts
        │
        ▼
2. FFmpeg Extract ──► Demuxes audio; extracts frames to buffer
        │
        ▼
3. InsightFace    ──► 512-dim facial embedding per frame
        │
        ▼
4. Face-Matcher   ──► Cosine similarity check; reset IDs on cut
        │
        ▼
5. Real-ESRGAN    ──► Super-resolution per tracked face ID
        │
        ▼
6. FFmpeg Encode  ──► Re-mux enhanced frames + original audio
        │
        ▼
[ Restored Output Video ]`}</pre>
        </div>
      </Section>

      <Section title="Key Engineering Decisions">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              title: "Custom Face-Matcher over Standard Trackers",
              body: "Standard object trackers lose identity continuity across abrupt lighting or angle changes. The custom matcher computes cosine similarity between InsightFace 512-dim embedding vectors across adjacent frames and explicitly resets the tracking buffer when PySceneDetect flags a shot boundary.",
            },
            {
              title: "Sequential VRAM Batching",
              body: "Running InsightFace and Real-ESRGAN concurrently on a local GPU exceeds available VRAM. The pipeline is restructured into isolated sequential processing stages with explicit CUDA cache clearing between stages to prevent Out-of-Memory crashes.",
            },
          ].map((item) => (
            <div key={item.title} style={{
              background: "var(--color-surface)", border: "1px solid var(--color-border)",
              borderRadius: "8px", padding: "1.25rem",
            }}>
              <h3 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{item.title}</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.875rem" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Documented Engineering Boundary">
        <div style={{
          background: "rgba(251,191,36,0.05)",
          border: "1px solid rgba(251,191,36,0.2)",
          borderRadius: "8px", padding: "1.25rem",
        }}>
          <p style={{ color: "#fbbf24", fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>
            ⚠ Honest Constraint
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.875rem" }}>
            This pipeline is engineered and tested on local GPU workstations. Multi-tenant distributed cloud rendering
            has not yet been implemented. Long-form video files (&gt;2 hours) have not been benchmarked at scale.
          </p>
        </div>
      </Section>
    </div>
  );
}
