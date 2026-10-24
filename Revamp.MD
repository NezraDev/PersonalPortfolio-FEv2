# Portfolio Revamp - Current Implementation Brief

> Follow the owner's latest reference: a cinematic full-screen project hero with an overlay navigation, oversized editorial headline, compact actions, and slide indicators. Keep the black, charcoal, gray, and blue palette, preserve all original pages, and keep content dense below the hero.

## Assignment

Act as a senior frontend developer with strong UI/UX and interaction design expertise. Present Arwil Martin Paraiso / Nezra's frontend and UI/UX work through a modern, polished portfolio designed for recruiters, HR professionals, and technical hiring managers.

## Visual direction

- Use near-black and charcoal foundations, cool gray text, and controlled blue accents.
- Keep secondary pages compact, readable, and information rich. Avoid oversized gaps and decorative filler.
- On Home, follow the supplied reference composition: a full-viewport project image, dark layered overlay, compact top navigation, oversized high-contrast display heading, concise supporting text, clear actions, and a bottom scroll cue with project progress controls.
- Pair a refined serif display face on the Home hero with the existing Manrope sans-serif for navigation, body copy, metadata, controls, and every original section.
- Make the active project's screenshot the full-bleed visual inside a horizontal sliding viewport. Keep a dark blue-black scrim over every project image so the changing background remains atmospheric and foreground text stays legible.
- Carry the same black, gray, and blue language through the original pages without rewriting their content or purpose.
- Use genuine project, portrait, organization, and certificate assets.

## Homepage hero slideshow

- Include every project from `src/data/project.ts` (currently 14), including frontend projects and Figma designs.
- Use a full-screen horizontal sliding viewport of project screenshots. Select CentrisAI initially. The background imagery is atmospheric; the Preview action opens the original screenshot at its full framing.
- Keep the hero headline and introduction stable while the current project's category, year/status, title, description, and destination update with the slide.
- Provide clear project and resume actions, contact access, screenshot preview, and one progress selector per project. Remove the numeric slide count; fill the active selector as the next slide approaches. Keep controls visually quiet: do not show previous/next or play/pause buttons.
- Let users select every project directly. Keep unobtrusive arrow-key support and wraparound behavior.
- Advance every 5 seconds with a 600ms transition. Pause rotation while hovering selector markers, during keyboard focus, document hiding, off-screen visibility, and screenshot preview. Hovering the rest of the hero must keep rotation running. Preserve the active selector?s elapsed progress during pauses. Respect reduced motion by stopping autoplay and removing the slide transition while keeping manual selection available.
- Use accurate destination labels. Identify Figma links as designs, preserve in-progress wording, and expose a source-code link only for a project-specific repository.
- Keep inactive slides inaccessible and out of the tab order. Keep all interactive controls keyboard and touch usable.

## Preserve the original portfolio pages

Retain the original routes, content, page titles, and purpose:

| Page | Existing route |
| --- | --- |
| Home | `#/home` |
| Skills | `#/skills` |
| Education | `#/education` |
| Experience | `#/experience` |
| Organization | `#/organization` |
| Projects | `#/projects` |
| Certifications | `#/certifications` |
| Achievements | `#/achievements` |
| Contact | `#/contact` |

Keep the original sections together below the Home hero as well as available on their dedicated routes. Preserve project filtering, full experience descriptions, education, organization roles, certifications, achievement previews, and contact details. Do not replace the original routes with archives, credential pages, or new case studies.

Maintain browser back/forward, direct links, refresh, resume access, project destinations, and mobile navigation. Give each dedicated route a polished editorial header and a content-specific full-width layout; do not repeat the Home hero or use a bulky profile rail.

## Content and truth

- Reuse `src/data` and existing types as factual sources.
- Preserve names, roles, dates, projects, awards, organizations, and genuine contact destinations.
- Keep student and internship context accurate.
- Distinguish personal contribution from team and project capabilities.
- Treat outcome figures as owner-provided claims; do not invent stronger results.
- Do not invent testimonials, availability, qualifications, project screenshots, research findings, or business outcomes.
- Label project-specific repositories honestly; a generic GitHub profile is not a source-code repository.

## Technical requirements

Use the current React, TypeScript, Vite, Tailwind CSS v4, and installed Framer Motion stack. Avoid framework migration and unnecessary production dependencies.

Keep content separate from presentation. Preserve original source images while using optimized derivatives for routine display. Self-host selected fonts with their licenses. Keep semantic headings, readable contrast, visible focus, keyboard access, accessible mobile navigation and dialogs, and reduced-motion support. Content must remain visible if animation setup fails.

Adapt the layout at phone, tablet, laptop, and wide desktop sizes. Fix overflow at its source, including nested components that must fit their containing columns.

## Validation and delivery

Run build and lint. Review the Home hero and original pages on desktop and mobile. Check project selection, slideshow controls, filtering and previews, original routes and browser history, résumé/contact links, keyboard access, reduced motion, and horizontal overflow.

Report only checks actually performed. Keep the result local for review until publication is requested.

## Latest layout refinement

Preserve the approved hero section. Revise the rest of Home and every dedicated page with an open editorial layout, balanced alignment, and consistent spacing. Avoid enclosing every group in an outlined card. Use a 4px spacing base, 64px between major desktop sections and 48px on phones, with closer spacing for related content. Lead Home with the introduction and selected projects, then capabilities, experience, education, organizations, credentials, recognition, and contact. Keep all existing routes and factual content.


Home must be a composed portfolio overview with differentiated visual hierarchy, not the same résumé sections restyled. Lead with the profile and selected work. Use expandable complete skill and role lists to retain access without overwhelming the overview. Each dedicated route must have a layout appropriate to its own content; consistent spacing does not mean identical section composition.

