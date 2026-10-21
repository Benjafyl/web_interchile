# Inter Chile Clima — Design direction

## Brand

The existing logo remains the source of identity. Use burgundy (#a6083c), deep burgundy (#77082e), cold white (#ffffff), ice gray (#edf3f5), graphite (#222c31) and muted slate (#58646a). Reserve the logo's green and cyan for the existing brand mark and focused utility accents.

Barlow Condensed is the display face: industrial, direct and compact. Manrope is the reading and interface face. The voice is technically confident, approachable and specific; never invent certifications, project outcomes or client testimonials.

## Composition

The homepage opens with oversized typography and a real industrial equipment lift. The visual is the signature moment. Services use a single accordion and a supporting field photograph; projects use an asymmetric editorial grid; the rental section presents actual capacities; numbered steps are reserved for the real customer process. FAQ answers use native disclosure controls.

Keep all seven existing routes, the established contact API, SEO metadata, company information and channels. Use actual repository photography and client marks, rather than generated illustrations or stock substitutes. Inner pages share a spacious typographic introduction, with layouts tailored to their content.

## Interaction and access

The owner's refinement calls for fewer directional symbols: actions use meaningful message, WhatsApp and project icons, with chevrons reserved for in-page navigation. The header offers official WhatsApp, Instagram and TikTok marks instead of displaying a phone number. Buttons have comfortable internal spacing, soft corners, a restrained hover lift and a brief highlight; service rows and project links respond to interaction without continuously animating the page. The final contact panel has inset padding around its copy and equally padded, separated actions.

The footer is a quiet pale surface with compact navigation and contact channels. Its credit is "Desarrollado por BYL", linked to https://byl-software.vercel.app and using the owner's original BYL-icono.svg from the supplied brand folder. Preserve that asset's original colors and geometry. The homepage trust section uses a technical field-coordination photograph rather than the group portrait, pending the owner's larger Inter Chile Clima photo library.

Tokens live in src/app/globals.css. One 800ms entrance in the homepage hero; 200ms response transitions elsewhere. Content remains visible before animation. Reduced-motion preferences disable all animation and smooth scrolling. Controls have visible keyboard focus; the mobile navigation closes on Escape and returns focus to its toggle. Keep the contact form's validation and delivery behavior.

## Mall Portal Temuco media — 2026

The owner's Drive folder “Ampleacion mall portal temuco 2026” is the sole source of all media under public/projects/portal-temuco-2026. Reviewed 63 photos and 37 short videos. Twenty visually confirmed near-duplicate photos were moved to Drive's recoverable trash; keep all distinct angles and all original videos. The general Imagenes and Videos folders were empty at the time of review.

Feature the new project with a short, user-controlled, silent film assembled only from the mall walkthrough and the ducts and unfinished construction areas (source clips 054, 044 and 045). The owner clarified that the colored pipes belong to the mall's existing machine room, outside the expansion project. Never use that room in the expansion film or its poster. Keep its four photos labeled and filtered as “Sala de máquinas”, after the expansion photographs. Preserve the complete portrait video framing against a soft background derived from the same footage.

No autoplay or continuous animation. The dedicated project page has 18 photographs, category filters and a native modal gallery with keyboard navigation, Escape, focus return and full uncropped images. Render original photo aspect ratios throughout the gallery and new team section. The homepage field-coordination portrait uses contain to preserve helmets and faces. Older construction photography remains separate from the Temuco case study; do not relabel it as Temuco.

## Publication checks

Build and type-check before publication. Review desktop at 1440px and mobile at 390px, including overflow, images, keyboard focus, menu, accordion, FAQ, links and contact validation. Repair observed defects as one batch and run one confirming pass. Deployment target is the existing Dokploy application, triggered by a push to main as authorized by the owner.
