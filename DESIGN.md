# Inter Chile Clima — Design direction

## Brand

The existing logo remains the source of identity. Use burgundy (#a6083c), deep burgundy (#77082e), cold white (#ffffff), ice gray (#edf3f5), graphite (#222c31) and muted slate (#58646a). Reserve the logo's green and cyan for the existing brand mark and focused utility accents.

Barlow Condensed is the display face: industrial, direct and compact. Manrope is the reading and interface face. The voice is technically confident, approachable and specific; never invent certifications, project outcomes or client testimonials.

## Composition

The homepage opens with oversized typography and a real industrial equipment lift. The visual is the signature moment. Services use a single accordion and a supporting field photograph; projects use an asymmetric editorial grid; the rental section presents actual capacities; numbered steps are reserved for the real customer process. FAQ answers use native disclosure controls.

Keep all seven existing routes, the established contact API, SEO metadata, company information and channels. Use actual repository photography and client marks, rather than generated illustrations or stock substitutes. Inner pages share a spacious typographic introduction, with layouts tailored to their content.

## Interaction and access

Tokens live in src/app/globals.css. One 800ms entrance in the homepage hero; 200ms response transitions elsewhere. Content remains visible before animation. Reduced-motion preferences disable all animation and smooth scrolling. Controls have visible keyboard focus; the mobile navigation closes on Escape and returns focus to its toggle. Keep the contact form's validation and delivery behavior.

## Verification

Build and type-check before publication. Review desktop at 1440px and mobile at 390px, including overflow, images, keyboard focus, menu, accordion, FAQ, links and contact validation. Repair observed defects as one batch and run one confirming pass. Deployment target is the existing Dokploy application, triggered by a push to main as authorized by the owner.
