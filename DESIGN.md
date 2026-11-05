# Interchile Clima — Design direction

## Brand

The existing logo remains the source of identity. Use burgundy (#a6083c), deep burgundy (#77082e), cold white (#ffffff), ice gray (#edf3f5), graphite (#222c31) and muted slate (#58646a). Reserve the logo's green and cyan for the existing brand mark and focused utility accents.

Barlow Condensed is the display face: industrial, direct and compact. Manrope is the reading and interface face. The voice is technically confident, approachable and specific; never invent certifications, project outcomes or client testimonials.

## Composition

The homepage opens with oversized typography and the owner's selected photograph sala-de-equipos.webp, showing red and blue pipes in Mall Portal Temuco's existing machine room. The owner explicitly chose this photo for the hero on November 5, 2026. Label it as the machine room, not the expansion project, and preserve the central equipment in the crop. The owner explicitly rejected generated photography: use only their real photographs throughout the website, including the hero; do not replace them with AI images. The rental section uses the actual large packaged HVAC unit in izaje-equipo-hvac.jpeg as a photographic background, with a deep graphite overlay behind the text and the actual 150,000 / 300,000 BTU capacities together. Keep the equipment visible and the original framing legible on desktop; on mobile show the equipment above the copy. Services use a single accordion and a supporting field photograph; projects use an asymmetric editorial grid; numbered steps are reserved for the real customer process. FAQ answers use native disclosure controls.

Keep all seven existing routes, the established contact API, SEO metadata, company information and channels. Use actual repository photography and client marks, rather than generated illustrations or stock substitutes. Inner pages share a spacious typographic introduction, with layouts tailored to their content.

## Interaction and access

The owner's refinement calls for fewer directional symbols: actions use meaningful message, WhatsApp and project icons, with chevrons reserved for in-page navigation. The header offers official WhatsApp, Instagram and TikTok marks instead of displaying a phone number. Buttons have comfortable internal spacing, soft corners, a restrained hover lift and a brief highlight; service rows and project links respond to interaction without continuously animating the page. The final contact panel has inset padding around its copy and equally padded, separated actions.

The footer is a quiet pale surface with compact navigation and contact channels. Its credit is "Desarrollado por BYL", linked to https://bylsoftware.cl/ and using the owner's original BYL-icono.svg from the supplied brand folder. Preserve that asset's original colors and geometry. The homepage trust section uses a technical field-coordination photograph rather than the group portrait, pending the owner's larger Interchile Clima photo library.

Tokens live in src/app/globals.css. One 800ms entrance in the homepage hero; 200ms response transitions elsewhere. Content remains visible before animation. Reduced-motion preferences disable all animation and smooth scrolling. Controls have visible keyboard focus; the mobile navigation closes on Escape and returns focus to its toggle. Keep the contact form's validation and delivery behavior.

## Mall Portal Temuco media — 2026

The owner's Drive folder “Ampleacion mall portal temuco 2026” is the sole source of all media under public/projects/portal-temuco-2026. Reviewed 63 photos and 37 short videos. Twenty visually confirmed near-duplicate photos were moved to Drive's recoverable trash; keep all distinct angles and all original videos. The general Imagenes and Videos folders were empty at the time of review.

The expansion case study concerns installation of ducts and climate-control piping. The machine room, colored pipes, pumps and large chillers are a separate, older job. Exclude them entirely from the expansion gallery, filters, film, poster and project copy. Its four images are archived under public/projects/portal-temuco-sala-de-maquinas. Keep the owner's selected machine-room hero photograph as general company experience, explicitly captioned as an earlier job.

The current film is a 19.5-second landscape montage, ductos-y-tuberias-ampliacion.mp4. Most of its runtime shows installed ducts and piping through gentle landscape pans of original photographs 091, 077, 087, 084 and 088. The final 2.5 seconds use the original landscape worksite video 054. Preserve the horizontal presentation: do not use portrait video clips or blurred side backgrounds. The owner rejected the informal group shot 053 and the family selfie equipo-interchile.webp. Do not restore either. Use a duct photograph for the poster. Do not display captions such as “Recorrido de obra · 14 segundos, sin audio” or other duration/audio labels.

At the owner's request, the project film autoplays muted, plays inline and loops, with native controls available to pause it. The dedicated project page has 14 photographs, with installations ordered before the professional team photographs and filters for Todas, Instalaciones and Equipo. Its native modal gallery supports keyboard navigation, Escape, focus return and full uncropped images. Render original photo aspect ratios throughout the gallery and team section. The homepage field-coordination portrait uses contain to preserve helmets and faces. Older construction photography remains separate from the Temuco case study; do not relabel it as Temuco.

## Publication checks

Anchor the Antofagasta rooftop photograph to center bottom in the homepage and project cards, keeping the HVAC units and technicians visible instead of the large expanse of sky.

The owner identified the nighttime crane photograph maniobra-grua-alto-las-condes.webp as Mall Alto Las Condes, Santiago de Chile. Use this location in homepage and project captions and image descriptions. It is a separate project from the Temuco expansion; no project date was supplied.

Build and type-check before publication. Review desktop at 1440px and mobile at 390px, including overflow, images, keyboard focus, menu, accordion, FAQ, links and contact validation. Repair observed defects as one batch and run one confirming pass. Deployment target is the existing Dokploy application, triggered by a push to main as authorized by the owner.
