---
name: Nezra Portfolio
description: Dark, image-led portfolio with a full-screen project carousel and compact original pages.
colors:
  accent: "#6aa5ff"
  accent-hover: "#8abbff"
  accent-contrast: "#061222"
  header-action: "#61b6ff"
  header-action-hover: "#8acaff"
  hero-accent: "#8dbaff"
  slide-active: "#36b7f4"
  focus: "#82b4ff"
  surface: "#090c12"
  surface-subtle: "#111722"
  panel: "#10151f"
  control: "#151c28"
  window-bar: "#18202d"
  ink: "#f1f4fa"
  ink-secondary: "#b1bacb"
  ink-muted: "#8e9bb1"
  border: "#263043"
  border-strong: "#566783"
typography:
  display:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "clamp(3.5rem, 5.85vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.052em"
  headline:
    fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif'
    fontSize: "27px"
    fontWeight: 600
    letterSpacing: "-0.035em"
  title:
    fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif'
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: 'Manrope, ui-sans-serif, system-ui, sans-serif'
    fontSize: "12px"
    fontWeight: 700
rounded:
  action: "5px"
  control: "6px"
  media: "8px"
  panel: "10px"
  card: "12px"
  hero-action: "0px"
spacing:
  tight: "8px"
  action-gap: "12px"
  inset: "16px"
  panel-gap: "20px"
  card-inset: "24px"
  panel-inset: "26px"
  page-inset: "30px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-contrast}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "11px 18px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.control}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "11px 18px"
  header-contact:
    backgroundColor: "{colors.header-action}"
    textColor: "{colors.accent-contrast}"
    typography: "{typography.label}"
    rounded: "{rounded.hero-action}"
    padding: "9px 17px"
  icon-button:
    backgroundColor: "{colors.control}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    size: "38px"
  hero-control:
    backgroundColor: "{colors.control}"
    textColor: "{colors.ink}"
    rounded: "3px"
    size: "34px"
  home-navigation:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
  slide-marker:
    backgroundColor: "{colors.border-strong}"
    height: "2px"
  slide-marker-active:
    backgroundColor: "{colors.slide-active}"
    height: "4px"
  category-select:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.media}"
    padding: "8px 36px 8px 14px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
  home-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "26px"
---

# Design System: Nezra Portfolio

## Overview

**Creative North Star: "The Midnight Project Reel."**

Home follows the supplied reference composition: the active project image spans the viewport, a layered black and charcoal scrim gives it depth, and the introduction sits over it in a large serif display face. Cool gray text carries project context while blue marks the emphasized headline, primary actions, and active slide. Navigation stays compact at the top; a scroll cue and individually selectable project markers anchor the lower edge.

The rest of the portfolio keeps the same dark palette with page-specific layouts. Home continues into the original sections, and the original nine dedicated routes retain their content and purpose. Manrope handles navigation, controls, metadata, and body copy. Georgia carries the Home hero and standalone page headings. The previous warm-paper direction is retired; the owner's current reference is the authority for Home.

**Key Characteristics:**

- Full-viewport, full-bleed project slideshow with a legibility scrim.
- Large white serif headline with an italic blue emphasis.
- Black, charcoal, cool gray, and controlled blue accents.
- Compact supporting copy, project metadata, and clear actions.
- Dense panels and preserved page structure below the hero.

## Colors

Near-black and charcoal provide the large surfaces. Cool white and slate gray keep the text hierarchy clear. Blue is the sole vivid accent, with a brighter cyan-blue reserved for the Home header action.

### Primary

- **Clear Blue** (`accent`): primary actions, active slide marks, selected states, and key links.
- **Pale Blue** (`accent-hover`): hover emphasis for blue actions.
- **Blue Ink** (`accent-contrast`): dark text on filled blue actions.
- **Bright Header Blue** (`header-action`): the square Contact action over the Home hero.
- **Header Hover Blue** (`header-action-hover`): brightens that header action on hover.
- **Display Blue** (`hero-accent`): italic emphasis in the Home headline.
- **Slide Cyan-Blue** (`slide-active`): marks the active segment in the project selector.
- **Focus Blue** (`focus`): visible keyboard focus ring.

### Neutral

- **Near Black** (`surface`): site background and the outer image-dialog canvas.
- **Charcoal** (`surface-subtle`): showcase surfaces and profile areas.
- **Panel Black** (`panel`): Home information panels and inset cards on standalone routes.
- **Control Charcoal** (`control`): secondary actions and controls.
- **Window Charcoal** (`window-bar`): shallow browser-style frame where that component is used.
- **Cool White** (`ink`): headings and primary text.
- **Slate Gray** (`ink-secondary`): supporting descriptions.
- **Muted Slate** (`ink-muted`): secondary metadata.
- **Divider Slate** (`border`): panel and section boundaries.
- **Strong Slate** (`border-strong`): prominent control boundaries.

**The Blue Cue Rule.** Reserve filled blue for primary actions and the active project cue. Keep secondary emphasis as text or an outline.

## Typography

**Display Font:** Georgia (with Times New Roman fallback)
**Body Font:** Manrope (with a system sans-serif fallback)
**Label Font:** Manrope

**Character:** The restrained serif display brings editorial scale to the Home hero and standalone page headings. Manrope keeps navigation, controls, metadata, and supporting information crisp and contemporary.

### Hierarchy

- **Display** (400, responsive clamp from 3.25rem to 5.2rem): Home hero and standalone route headings; italic Home emphasis uses Display Blue. On tablet and phone widths, the size reduces through explicit responsive clamps.
- **Headline** (600, 21px): content section headings.
- **Title** (600, 21px, line-height 1.3): Home panel headings; local components may reduce this slightly in narrow columns.
- **Body** (400, 15px, line-height 1.7): general text. Hero introduction uses 14px; long descriptions stay left aligned and line lengths remain controlled.
- **Label** (700, 12px): button labels and prominent compact actions. Navigation uses 11px; metadata is smaller and remains secondary.

**The Display Pairing Rule.** Use Georgia for the Home hero and standalone route headings. Use Manrope for the remaining interface and supporting copy.

## Layout

The Home content container caps at 1360px. Standalone pages use a 1240px editorial container with an 80px wide-screen inset, reducing to 40px by 850px and 28px by 560px. Home's header overlays the full-bleed hero. Dedicated pages use the regular sticky header.

The Home hero fills at least the viewport height (100svh) and has a 720px desktop minimum, increasing to 760px on tablet and 790px on phones. Its background track slides one project image per viewport. A dark gradient covers the image, while the text column, dynamic project summary, and actions stay grouped on the left. A bottom row pairs a portfolio scroll cue with project selector segments. There is no numeric slide counter or visible playback control. The active segment fills with elapsed autoplay time. On phones, controls wrap into touch-sized selector grids: two rows of seven below 560px and three rows of five at 360px and below.

All 14 hero projects remain directly selectable, and arrow keys wrap through the slideshow without visible arrow or pause buttons. Below the hero, all original Home sections remain available in an editorial reading flow with direct links to their complete routes. Dedicated pages keep the same factual content and use open layouts, readable text, and balanced grids without decorative page numbers or eyebrow labels.

**The Full-Bleed, Tight-Content Rule.** Let genuine project imagery fill the hero, but keep the details and sections tightly grouped so a tall screen does not become a blank stage.

## Elevation & Depth

The hero gains depth from its image, cool blue-black scrim, and subtle blue light rather than stacked cards. The remaining pages use dark tonal separation, fine borders, and restrained shadows. Keep the hero image dark enough for foreground text contrast while allowing the selected project's identity to remain visible. The Preview action opens the original full-framing screenshot.

**The Legibility Scrim Rule.** Every project image in the hero receives the same layered dark overlay; do not rely on a particular screenshot being dark.

## Shapes

The Home hero and its header Contact action use square corners to match the reference. Standard primary and secondary actions use softly eased corners (5px); icon controls use a slightly rounder edge (6px). Panels use medium corners (10px) and cards use 12px. Borders remain thin, and slide imagery clips to the viewport without changing the source asset.

## Components

### Buttons

Keep labels direct and pair important actions with a small directional icon. The primary action uses Clear Blue with dark text; the secondary action uses a dark fill with a slate outline. Home's header Contact action is a bright blue rectangle with square corners. Hover lightens the fill or strengthens the border. Keyboard focus uses a clear 2px blue outline offset by 4px.

### Chips

Technology tags remain passive outlined pills with slate text. The Projects route uses a compact segmented button group to switch between Frontend Development and UI/UX Design.

### Cards / Containers

Home uses an open editorial overview: a portrait and introduction, selected work, capabilities, experience, paired education and organizations, paired credentials and recognition, then contact. Use proximity, alignment, and fine horizontal rules instead of enclosing panel outlines. Standalone pages follow the same open treatment. Preserve borders only when they explain an interactive control or frame an image.

### Inputs / Fields

The dedicated Projects page presents the two existing categories as keyboard-accessible, selected-state filter buttons with counts. Keep the selected category behavior and existing filter options.

### Navigation

Keep all nine original hash routes. Home navigation overlays the hero with the wordmark at left, route links centered on desktop, and the Contact action at right. The current route has a blue underline. At 1100px the nav becomes the mobile menu; opening focuses its first link, Escape returns focus to the trigger, and choosing a route closes it. Dedicated pages retain the regular sticky header.

### Project Slideshow

The Home slideshow contains one full-viewport slide for each project. Use the 720w/1440w optimized derivatives as atmospheric backgrounds and retain the original screenshot for Preview. The initial selection is CentrisAI. The active slide updates project metadata and its accurate destination. Fourteen keyboard- and touch-accessible progress segments select projects directly. Support arrow-key navigation without displaying previous/next or play/pause buttons.

Autoplay advances every 5000ms with a 600ms slide transition. Pause while the selector markers are hovered or a hero control has keyboard focus, the document is hidden, the hero is outside the viewport, or the image preview is open. Ordinary pointer movement over hero content keeps autoplay running. The active marker fill shares the slide timer and preserves progress during pauses. Reduced motion disables autoplay and removes the slide transition while preserving direct project selection. Hide and inert inactive slides.

### Image Preview

Use the shared native dialog for project and credential images. Keep Escape handling, focus restoration, body-scroll locking, and the contained original image.

### Image and Font Delivery

Use existing project screenshots and optimized WebP derivatives for the slideshow; keep original source images intact for preview. The initial CentrisAI image is eager and high priority. Lazy-load the other project slides. Manrope remains self-hosted and includes its license at `public/fonts/manrope-OFL.txt`.

## Do's and Don'ts

### Do:

- **Do** keep the palette black, charcoal, gray, and blue across all routes.
- **Do** use the reference's full-screen image, editorial headline, compact navigation, and lower slide indicators on Home.
- **Do** preserve every project, all 14 direct slide selectors, and the original nine routes and page content.
- **Do** keep dynamic project labels truthful, especially Figma designs and in-progress work.
- **Do** respect reduced motion, keyboard focus, and touch input.

### Don't:

- **Don't** reintroduce the rejected warm-paper palette.
- **Don't** let the hero scrim disappear on light project screenshots.
- **Don't** make Home sections or original dedicated pages difficult to reach.
- **Don't** claim a generic GitHub profile is a project repository or label designs as live sites.
- **Don't** invent credentials, results, availability, or project content.

<!-- Updated from the current app styles and the owner's supplied Home reference. Desktop/mobile evidence: .impeccable/review/home-reference-{desktop,mobile,320}.png. -->


### Current spacing and grouping

The approved hero is preserved. Below it, use 64px between major desktop sections, 32px between a heading and its content, and 20px within close groups. Reduce major separation to 48px on phones. Home and standalone content share a 1240px maximum width. Keep body text readable, align neighboring groups to a shared grid, and allow cards to size to their content. The final refinement rules live in src/styles/refinement.css.

### Revised composition

Home below the hero is now a composed overview rather than a repeated section grid: split profile introduction, one lead project with two supporting projects, three capability disciplines with an expandable full toolkit, current roles with expandable history, education and community, a certificate gallery, learning, and a closing contact action. Complete routes use category rows for Skills, company and contribution columns for Experience, featured project rows and a gallery for Projects, institution and qualification columns for Education, leadership rows for Organizations, credential rows for Certifications, and image-first award exhibits for Achievements. Groups align to a consistent full-width grid. Avoid decorative outlines around content.


### Project filters and professional focus

Present the owner?s focus as Full Stack Web Development. Preserve the Experience section?s existing titles and descriptions. Project cards and hero actions show project destinations without GitHub source links. The Projects page retains Web Development and UI/UX Design categories; Web Development supports All, Client, Academic, and Personal filters. Classify projects only from confirmed context; projects without a confirmed type remain accessible under All.

DMSA and Total Mobile Install are the highlighted client projects. They lead the Home selected work section through placement and scale. Do not display highlighted-project labels. Remedy and The Music Nook are also client projects and participate in the hero slideshow and filters. Technology tags contain development tools and libraries, excluding fonts, business services, and content features.

### Motion system

The Home project showcase is the focal scroll sequence: screenshots reveal through a restrained vertical mask over 720ms; accompanying copy arrives over 520ms with a short offset. Headings receive a small 16px arrival rather than whole sections moving together. Native smooth anchor scrolling is retained; wheel and touch are not intercepted. A fixed-header progress line communicates page depth. Menus, contact dialogs, disclosure arrows, and action arrows use coordinated 180?280ms feedback. Existing list entrances use short stagger intervals. Content is visible before animation initializes. Reduced motion skips scroll reveals and spatial feedback, removes smooth scrolling, and preserves immediate state changes. The navbar stays fixed through navigation.

### Project depth

Project preview surfaces on Home and Projects use scroll-linked 3D perspective: up to 5 degrees on desktop and 2 degrees on touch devices, settling flat near the viewport center. Desktop pointer tilt adds at most 2 degrees per axis. Text, navigation, and the approved hero remain flat. Frames are scheduled from scroll, resize, and visibility events; off-screen previews are skipped. Filtering registers new preview surfaces and cleans up removed ones. Reduced motion removes all perspective effects.

The owner requested more visible motion: preview entrances now use a 16-degree perspective arrival, 44px lift, and 1000ms reveal. Scroll perspective is increased to 13 degrees on desktop and 6 degrees on touch, with up to 60px depth recession; pointer tilt is capped at 5 degrees per axis. Route content enters over 600ms and the hero story over 850ms. Reduced-motion behavior is unchanged.

The owner requested a dramatic 3D showcase: desktop scroll pitch reaches 32 degrees, alternating yaw 16 degrees, and depth recession 150px. Touch uses 14-degree pitch, 5-degree yaw, and 65px recession. Desktop pointer tilt reaches 12 degrees per axis. Project entrances unfold from a 34-degree plane over 1200ms; directional shadows and a restrained surface sheen clarify depth. Text remains flat and readable. Reduced motion continues to remove these effects.

Latest motion direction: 3D is hover-only on project previews. Remove scroll-linked perspective, depth recession, and 3D unfolding entrances. Fine-pointer desktop hover retains up to 12 degrees of cursor-driven tilt per axis, directional shadow, and surface sheen; pointer exit resets to flat. Touch and reduced-motion users receive flat previews. Scroll entrances remain 2D masks and text arrivals.
