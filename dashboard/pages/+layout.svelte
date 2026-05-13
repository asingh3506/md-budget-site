<script>
    import '@evidence-dev/tailwind/fonts.css';
    import '../app.css';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { EvidenceDefaultLayout } from '@evidence-dev/core-components';
    import { showQueries } from '@evidence-dev/component-utilities/stores';
    export let data;

    onMount(() => {
        showQueries.set(false);
    });

    // In dev, Evidence runs on :5173 while Next.js runs on :3000.
    // In production (same Netlify domain), all navigation is relative.
    $: mainSiteUrl = (() => {
        if (typeof window === 'undefined') return '';
        return window.location.port === '5173' ? 'http://localhost:3000' : '';
    })();
</script>

<svelte:head>
    <link rel="stylesheet" href="/custom.css"/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    <title>Maryland Budget Intel Tool · Deep-Dive</title>
</svelte:head>

<EvidenceDefaultLayout
    {data}
    title="Maryland Budget Intel Tool"
    logo="/logo.png"
    homePageName="Technology Overview"
    neverShowQueries={true}
    maxWidth="1440px"
>
    <div slot="header">
        <!-- Unified nav bar — mirrors the main Next.js site navigation -->
        <div class="unified-nav">
            <a href="{mainSiteUrl}/" class="nav-link">Home</a>
            <a href="{mainSiteUrl}/methodology" class="nav-link">Methodology</a>
            <a href="{mainSiteUrl}/guardrails" class="nav-link">Guardrails</a>
            <span class="nav-link active">Deep-Dive Dashboard</span>
        </div>

        <!-- Maryland flag color stripe (matches the one in Header.tsx) -->
        <div class="md-flag-stripe">
            <div class="stripe stripe-red"></div>
            <div class="stripe stripe-gold"></div>
            <div class="stripe stripe-black"></div>
            <div class="stripe stripe-white"></div>
        </div>
    </div>

    <slot slot="content" />

    <div slot="footer">
        <div class="unified-footer">
            <span class="footer-brand">Maryland Budget Intel Tool</span>
            <span class="footer-credits">
                Created by Aarushi Singh, Nadvi Haque, Priyanshu Gupta, and James Van Doorn
            </span>
            <span class="footer-data">
                State of Maryland · Dept. of Budget &amp; Management · FY2020–FY2027 · TBM v5.0.1
            </span>
        </div>
    </div>
</EvidenceDefaultLayout>

<style>
    /* ── Unified nav bar ──────────────────────────────────────────── */
    .unified-nav {
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 4px 28px;
        background: rgba(255, 255, 255, 0.97);
        border-top: 1px solid #E5E7EB;
    }

    .nav-link {
        font-size: 13px;
        font-weight: 600;
        font-family: 'IBM Plex Sans', system-ui, sans-serif;
        color: #6B7280;
        text-decoration: none;
        padding: 7px 14px;
        border-radius: 8px;
        background: transparent;
        border-bottom: 2px solid transparent;
        transition: all 0.18s;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
    }

    .nav-link:hover {
        color: #6321a5;
        background: #ede5f8;
    }

    .nav-link.active {
        color: #211030;
        background: #ede5f8;
        border-bottom-color: #6321a5;
    }

    /* ── Maryland flag stripe ─────────────────────────────────────── */
    .md-flag-stripe {
        display: flex;
        height: 4px;
        width: 100%;
    }

    .stripe        { flex: 1; }
    .stripe-red    { background: #CE1126; }
    .stripe-gold   { background: #E8A317; }
    .stripe-black  { background: #000000; }
    .stripe-white  { background: #ffffff; border-bottom: 1px solid #E5E7EB; }

    /* ── Footer ───────────────────────────────────────────────────── */
    .unified-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 20px 0 16px;
        border-top: 1px solid #E5E7EB;
        margin-top: 32px;
    }

    .footer-brand {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 600;
        color: #374151;
        text-transform: uppercase;
        letter-spacing: 0.06em;
    }

    .footer-credits,
    .footer-data {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        color: #6B7280;
        letter-spacing: 0.05em;
    }

    /* ── Evidence header overrides — match the main site ─────────── */
    :global(header) {
        background: rgba(255, 255, 255, 0.97) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border-bottom: 1px solid #E5E7EB !important;
        box-shadow: 0 1px 6px rgba(78, 19, 75, 0.06) !important;
    }

    /* Site name in Evidence header */
    :global(header [class*="font-bold"]),
    :global(header [class*="title"]) {
        font-family: Georgia, serif !important;
        font-weight: 900 !important;
        letter-spacing: -0.4px !important;
        color: #211030 !important;
        font-size: 15px !important;
        line-height: 1.1 !important;
    }

    /* Headings use IBM Plex Sans (matches main site, not Montserrat) */
    :global(h1), :global(h2), :global(h3), :global(h4) {
        font-family: 'IBM Plex Sans', system-ui, sans-serif !important;
        color: #211030 !important;
    }

    /* ── KPI cards — purple accent cycle ─────────────────────────── */
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top) {
        background: #fff !important;
        border: 1px solid #E5E7EB !important;
        border-left: 4px solid #6321a5 !important;
        border-radius: 12px !important;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04) !important;
        padding: 14px 16px !important;
        margin-right: 0 !important;
        min-width: 170px !important;
        transition: box-shadow 0.2s, transform 0.2s !important;
    }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:hover) {
        box-shadow: 0 4px 16px rgba(99, 33, 165, 0.10) !important;
        transform: translateY(-1px) !important;
    }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n + 1)) { border-left-color: #6321a5 !important; }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n + 2)) { border-left-color: #E8A317 !important; }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n + 3)) { border-left-color: #802CD7 !important; }
    :global(div.inline-block.font-sans.pt-2.pb-3.pl-0.mr-3.items-center.align-top:nth-of-type(4n))     { border-left-color: #CE1126 !important; }

    :global(blockquote) {
        border-left: 4px solid #6321a5 !important;
        background: #ede5f8 !important;
        padding: 14px 18px !important;
        border-radius: 0 6px 6px 0 !important;
        margin: 16px 0 !important;
    }

    :global(th) { border-bottom: 2px solid #6321a5 !important; }
</style>
