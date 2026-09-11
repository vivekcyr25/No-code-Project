import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Vivek Sharma — Pipeline & AI Engineer",
  description: "I build and optimize Python-based multimedia processing pipelines that solve real processing bottlenecks and eliminate visual artifacts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
        <footer style={{
          borderTop: "1px solid var(--color-border)",
          padding: "2rem",
          textAlign: "center",
          color: "var(--color-muted)",
          fontSize: "0.8rem",
          fontFamily: "var(--font-mono)"
        }}>
          © 2025 Vivek Sharma — Portfolio built with Next.js · Deployed on GitHub Pages
        </footer>
      </body>
    </html>
  );
}
