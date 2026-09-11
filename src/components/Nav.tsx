"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(7,11,20,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--color-border)",
    }}>
      <div style={{
        maxWidth: "1120px", margin: "0 auto",
        padding: "0 1rem",
        height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-mono)", fontWeight: 600,
          color: "var(--color-accent)", textDecoration: "none",
          fontSize: "0.95rem", letterSpacing: "0.02em",
        }}>
          VS<span style={{ color: "var(--color-muted)" }}>.dev</span>
        </Link>
        <nav style={{ display: "flex", gap: "0.25rem" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              padding: "0.4rem 0.85rem",
              borderRadius: "6px",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              color: pathname === l.href ? "var(--color-accent)" : "var(--color-muted)",
              background: pathname === l.href ? "rgba(34,211,238,0.08)" : "transparent",
              transition: "all 0.15s",
            }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
