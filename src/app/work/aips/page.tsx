import Link from "next/link";

export default function AIPSPage() {
  const Tag = ({ c }: { c: string }) => (
    <span style={{
      padding: "0.2rem 0.6rem", background: "rgba(34,211,238,0.07)",
      border: "1px solid rgba(34,211,238,0.2)", borderRadius: "4px",
      fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--color-accent)",
    }}>{c}</span>
  );
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 1rem" }}>
      <Link href="/work" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem", marginBottom: "2.5rem" }}>
        ← Work
      </Link>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Case Study 02</p>
      <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.2, marginBottom: "1rem" }}>
        AIPS — Academic Intelligence System
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "3rem" }}>
        {["Next.js App Router","TypeScript","Groq API Proxy","React 19"].map(t => <Tag key={t} c={t} />)}
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>The Problem</h2>
        <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
          Academic assistance interfaces commonly expose LLM API keys on the client side, lack context boundary enforcement,
          and fail to validate whether model responses match the requested academic domain — making them both a security risk and unreliable for academic use.
        </p>
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Architecture</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { n: "01", t: "Server-Side API Key Isolation", d: "All Groq API credentials live exclusively in server-side environment variables (.env.local). The client never touches the key — all requests proxy through a Next.js Route Handler." },
            { n: "02", t: "Context Window Assembly", d: "Incoming academic queries are parsed, extraneous tokens stripped, and a structured system prompt is assembled before dispatching to the LLM runtime." },
            { n: "03", t: "Domain Verification Filter", d: "Responses are validated to ensure they remain within the academic topic boundaries before being returned to the client." },
          ].map(item => (
            <div key={item.n} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "1.25rem", display: "flex", gap: "1rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-accent)", fontWeight: 700, flexShrink: 0 }}>{item.n}</span>
              <div>
                <h3 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: "0.4rem", fontSize: "0.95rem" }}>{item.t}</h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.875rem" }}>{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "rgba(251,191,36,0.05)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: "8px", padding: "1.25rem" }}>
        <p style={{ color: "#fbbf24", fontFamily: "var(--font-mono)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>⚠ Honest Constraint</p>
        <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.875rem" }}>Local offline indexing is currently incomplete and acknowledged as a boundary. Live online retrieval is fully functional.</p>
      </div>
    </div>
  );
}
