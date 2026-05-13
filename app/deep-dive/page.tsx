"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// In dev: set NEXT_PUBLIC_EVIDENCE_URL=http://localhost:5173 in .env.local
// In production: Evidence is built to public/deep-dive/ and served as static files
const EVIDENCE_DEV_URL = process.env.NEXT_PUBLIC_EVIDENCE_URL || "http://localhost:5173";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export default function DeepDivePage() {
  const [redirectTarget, setRedirectTarget] = useState<string | null>(null);

  useEffect(() => {
    // Production: Evidence is built as static files in public/deep-dive/
    // Navigating to /deep-dive/ will load the static Evidence index
    const target = IS_PRODUCTION
      ? "/deep-dive/"
      : EVIDENCE_DEV_URL;

    setRedirectTarget(target);
    // Give the user a brief moment to see the page before redirecting
    const timer = setTimeout(() => {
      window.location.href = target;
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: "40px 28px",
      }}
    >
      {/* Spinner */}
      <div
        style={{
          width: 40,
          height: 40,
          border: "3px solid var(--line)",
          borderTopColor: "var(--nxt-grape)",
          borderRadius: "50%",
          animation: "spin 0.7s linear infinite",
        }}
      />

      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
            color: "var(--nxt-deep)",
            marginBottom: 8,
          }}
        >
          Loading Deep-Dive Dashboard…
        </p>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--text-mute)",
            letterSpacing: "0.04em",
          }}
        >
          {IS_PRODUCTION
            ? "Opening the Evidence analytics dashboard."
            : (
              <>
                Connecting to Evidence dev server at{" "}
                <code style={{ color: "var(--nxt-grape)" }}>{EVIDENCE_DEV_URL}</code>.
              </>
            )}
        </p>
      </div>

      {!IS_PRODUCTION && (
        <div
          style={{
            background: "var(--line-soft)",
            border: "1px solid var(--line)",
            borderLeft: "3px solid var(--amber)",
            borderRadius: 8,
            padding: "12px 16px",
            maxWidth: 560,
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--text-soft)",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "var(--nxt-deep)", display: "block", marginBottom: 4 }}>
            If nothing happens, start the Evidence dev server:
          </strong>
          <code style={{ display: "block", background: "#fff", padding: "6px 10px", borderRadius: 4, marginBottom: 8 }}>
            cd dashboard &amp;&amp; npm install &amp;&amp; npm run dev
          </code>
          Then visit{" "}
          <a
            href={EVIDENCE_DEV_URL}
            style={{ color: "var(--nxt-grape)", textDecoration: "underline" }}
          >
            {EVIDENCE_DEV_URL}
          </a>
          {" "}directly, or set{" "}
          <code>NEXT_PUBLIC_EVIDENCE_URL</code> in{" "}
          <code>.env.local</code> if using a different port.
        </div>
      )}

      {redirectTarget && (
        <p style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-mute)" }}>
          Not redirecting?{" "}
          <a href={redirectTarget} style={{ color: "var(--nxt-grape)", textDecoration: "underline" }}>
            Click here
          </a>
        </p>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
