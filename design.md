# Design Specification: Jack — 3D Creator Portfolio

This document locks the design system, visual specifications, motion physics, component architectures, and asset registries for the **Jack — 3D Creator** portfolio landing page.

---

## 1. Global Design Tokens

### 1.1 Color Palette
| Token | Value | Application |
|---|---|---|
| **Background Primary** | `#0C0C0C` | `html`, `body`, `#root`, Hero, Marquee, About, Projects, Footer |
| **Surface Contrast** | `#FFFFFF` | Services Section background |
| **Text Primary** | `#D7E2EA` | Body copy, navbar links, labels, project titles |
| **Text Inverted** | `#0C0C0C` | Services headings, service numbers, service descriptions |
| **Border Muted (Dark)** | `rgba(215, 226, 234, 0.2)` / `#D7E2EA` | Project cards, buttons, section dividers |
| **Border Muted (Light)**| `rgba(12, 12, 12, 0.15)` | Services section item dividers |
| **Card Fallback / Tile** | `#16181D` / `#181B22` | Marquee tile background, project image placeholder |

### 1.2 Gradients
- **Hero Heading Gradient (`.hero-heading`)**:
  ```css
  background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
- **Contact Pill Button Gradient**:
  ```css
  background: linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%);
  box-shadow: 0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1;
  outline: 2px solid #FFFFFF;
  outline-offset: -3px;
  ```

### 1.3 Typography
- **Primary Font Family**: `'Kanit', sans-serif` (Google Fonts)
- **Weights Loaded**: `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold), `900` (Black)
- **Fluid Type Scales**:
  - **Massive Hero Heading**: `clamp(3rem, 16vw, 17.5vw)` (`text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]`)
  - **Section Headings**: `clamp(3rem, 12vw, 160px)`
  - **Service & Project Numbers**: `clamp(3rem, 10vw, 140px)`
  - **Service Titles**: `clamp(1rem, 2.2vw, 2.1rem)`
  - **Service Descriptions**: `clamp(0.85rem, 1.6vw, 1.25rem)`
  - **About Paragraph**: `clamp(1rem, 2vw, 1.35rem)`
  - **Hero Bottom Statement**: `clamp(0.75rem, 1.4vw, 1.5rem)`

### 1.4 Geometry & Corner Radii
- **Services Top Curve**: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`
- **Projects Top Curve**: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]` (pulled up `-mt-10 sm:-mt-12 md:-mt-14`)
- **Project Cards**: `rounded-[40px] sm:rounded-[50px] md:rounded-[60px]`
- **Project Images**: `rounded-[40px] sm:rounded-[50px] md:rounded-[60px]`
- **Marquee Tiles**: `rounded-2xl`
- **Pill Buttons**: `rounded-full`

---

## 2. Reusable UI Components

### 2.1 ContactButton
- **Form**: Fully rounded pill button (`rounded-full`).
- **Background**: Multi-stop violet-magenta-amber gradient (`linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)`).
- **Shadows**:
  - Drop shadow: `0px 4px 4px rgba(181, 1, 167, 0.25)`
  - Inner glow: `inset 4px 4px 12px #7721B1`
- **Outline**: `2px solid #FFFFFF` with `outline-offset: -3px`.
- **Text**: `#FFFFFF`, `font-medium`, `uppercase`, `tracking-widest`.
- **Sizing**: `px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4`, `text-xs sm:text-sm md:text-base`.
- **Interactivity**: `hover:scale-105 active:scale-95 hover:brightness-110 duration-300`.

### 2.2 LiveProjectButton
- **Form**: Ghost pill button (`rounded-full`).
- **Border**: `2px solid #D7E2EA`.
- **Text**: `#D7E2EA`, `font-medium`, `uppercase`, `tracking-widest`.
- **Sizing**: `px-8 py-3 sm:px-10 sm:py-3.5`, `text-sm sm:text-base`.
- **Hover**: Background tint `rgba(215, 226, 234, 0.1)`, scale transition `duration-300`.

### 2.3 Magnet
- **Behavior**: Mouse-following magnetic attraction on hover.
- **Physics Constants**:
  - `padding`: `150px` detection boundary
  - `strength`: `3` divisor factor (`dx / 3`, `dy / 3`)
  - `activeTransition`: `"transform 0.3s ease-out"`
  - `inactiveTransition`: `"transform 0.6s ease-in-out"`
  - `willChange`: `'transform'`

### 2.4 AnimatedText
- **Behavior**: Scroll-driven character-by-character opacity reveal.
- **Opacity Range**: `0.2` (dim) to `1.0` (active bright `#D7E2EA`).
- **Scroll Hook**: Framer Motion `useScroll` targeting paragraph with `offset: ['start 0.8', 'end 0.2']`.
- **Layout Integrity**: Hidden placeholder character + absolute positioned animated span to preserve exact natural flow and prevent text shifting.

### 2.5 FadeIn
- **Trigger**: Framer Motion `whileInView` with `viewport: { once: true, margin: "50px", amount: 0 }`.
- **Curve**: Cubic Bézier `[0.25, 0.1, 0.25, 1]`.
- **Defaults**: `duration = 0.7s`, `y = 30px`, `x = 0px`.

---

## 3. Section Specifications

### 3.1 Hero Section
- **Height**: Full viewport height (`h-screen`), flex column layout, `overflowX: 'clip'`, `bg-[#0C0C0C]`.
- **Navbar**:
  - 4 items: `ABOUT`, `PRICE`, `PROJECTS`, `CONTACT`.
  - Spacing: `justify-between`, `px-6 md:px-10 pt-6 md:pt-8`.
  - Font: `#D7E2EA`, `font-medium`, `uppercase`, `tracking-wider`, `text-sm md:text-lg lg:text-[1.4rem]`.
  - Hover: Opacity 70% with 200ms ease transition.
  - Entrance: FadeIn `delay = 0s`, `y = -20px`.
- **Hero Heading**:
  - Text: `Hi, i'm jack` (`&apos;` curly apostrophe, lowercase `i`).
  - Class: `.hero-heading` gradient text.
  - Font: `font-black`, `uppercase`, `tracking-tight`, `leading-none`, `whitespace-nowrap`.
  - Scale: `text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]`.
  - Margin: `mt-6 sm:mt-4 md:-mt-5`.
  - Entrance: FadeIn `delay = 0.15s`, `y = 40px`.
- **Hero Portrait**:
  - Image: `https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png`.
  - Wrapper: `Magnet` component.
  - Position: `absolute left-1/2 -translate-x-1/2 z-10`.
  - Mobile: `top-1/2 -translate-y-1/2`.
  - Desktop (`sm+`): `sm:top-auto sm:translate-y-0 sm:bottom-0`.
  - Width: `w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]`.
  - Entrance: FadeIn `delay = 0.6s`, `y = 30px`.
- **Bottom Bar**:
  - Left copy: `"a 3d creator driven by crafting striking and unforgettable projects"`, `#D7E2EA`, `font-light`, `uppercase`, `tracking-wide`, `max-w-[160px] sm:max-w-[220px] md:max-w-[260px]`.
  - Right: `ContactButton` component.
  - Entrance: Left text `delay = 0.35s, y = 20px`; Button `delay = 0.5s, y = 20px`.

### 3.2 Marquee Section
- **Background**: `#0C0C0C`, `pt-24 sm:pt-32 md:pt-40 pb-10`.
- **Row 1**: 11 GIF assets tripled. Translates **RIGHT** on scroll (`translateX(offset - 200)`).
- **Row 2**: 10 GIF assets tripled. Translates **LEFT** on scroll (`translateX(-(offset - 200))`).
- **Scroll Math**: `offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3`.
- **Tiles**: `420px × 270px`, `rounded-2xl`, `object-cover`, `gap-3` between tiles and rows.
- **Registered Asset URLs**:
  1. `https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif`
  2. `https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif`
  3. `https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif`
  4. `https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif`
  5. `https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif`
  6. `https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif`
  7. `https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif`
  8. `https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif`
  9. `https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif`
  10. `https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif`
  11. `https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif`
  12. `https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif`
  13. `https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif`
  14. `https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif`
  15. `https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif`
  16. `https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif`
  17. `https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif`
  18. `https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif`
  19. `https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif`
  20. `https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif`
  21. `https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif`

### 3.3 About Section
- **Dimensions**: Centered `min-h-screen`, `px-5 sm:px-8 md:px-10 py-20`.
- **Corner 3D Icons**:
  - **Top-left (Moon)**: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png` (`w-[120px] sm:w-[160px] md:w-[210px]`, `top-[4%] left-[1%] sm:left-[2%] md:left-[4%]`, delay `0.1s`, `x = -80px`).
  - **Bottom-left (3D object)**: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png` (`w-[100px] sm:w-[140px] md:w-[180px]`, `bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]`, delay `0.25s`, `x = -80px`).
  - **Top-right (Lego)**: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png` (`w-[120px] sm:w-[160px] md:w-[210px]`, `top-[4%] right-[1%] sm:right-[2%] md:right-[4%]`, delay `0.15s`, `x = 80px`).
  - **Bottom-right (3D group)**: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png` (`w-[130px] sm:w-[170px] md:w-[220px]`, `bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]`, delay `0.3s`, `x = 80px`).
- **Heading**: `"About me"` in `.hero-heading`, `clamp(3rem, 12vw, 160px)`, delay `0s`, `y = 40px`.
- **Text Block**: Animated paragraph `max-w-[560px]`, `clamp(1rem, 2vw, 1.35rem)`.
- **Spacing**: Heading to text: `gap-10 sm:gap-14 md:gap-16`. Text to button: `gap-16 sm:gap-20 md:gap-24`.

### 3.4 Services Section
- **Theme**: Crisp White `#FFFFFF`, rounded top corners `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`.
- **Heading**: `"Services"` in `#0C0C0C`, `clamp(3rem, 12vw, 160px)`, `mb-16 sm:mb-20 md:mb-28`.
- **Content Registry**:
  1. `01 - 3D Modeling`: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  2. `02 - Rendering`: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  3. `03 - Motion Design`: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  4. `04 - Branding`: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  5. `05 - Web Design`: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
- **Layout**: Horizontal split with huge number on left (`clamp(3rem, 10vw, 140px)`), name + description on right. 1px borders `rgba(12, 12, 12, 0.15)`. Staggered delays `i * 0.1s`.

### 3.5 Projects Section
- **Theme**: Dark `#0C0C0C` overlay with rounded top corners `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`, pulled up `-mt-10 sm:-mt-12 md:-mt-14`, `z-10`.
- **Heading**: `"Project"` (singular) in `.hero-heading`.
- **Sticky Stacking Physics**:
  - Container height: `h-[85vh]` per card.
  - Scale transform: `targetScale = 1 - (totalCards - 1 - index) * 0.03`.
  - Sticky offset: `top: calc(5rem + ${index * 28}px)`.
- **Card Anatomy**:
  - Border: `2px solid #D7E2EA`, background `#0C0C0C`, padding `p-4 sm:p-6 md:p-8`.
  - Top row: Number (`01`, `02`, `03`), category tag (`[Client]`, `[Personal]`), project title, and `LiveProjectButton`.
  - Bottom row: Left column 40% (2 stacked images, heights `clamp(130px, 16vw, 230px)` and `clamp(160px, 22vw, 340px)`), right column 60% (1 tall image).
- **Projects Registry**:
  - **01 Nextlevel Studio (Client)**:
    - Col1 Img1: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85`
    - Col1 Img2: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85`
    - Col2 Img: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85`
  - **02 Aura Brand Identity (Personal)**:
    - Col1 Img1: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85`
    - Col1 Img2: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85`
    - Col2 Img: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85`
  - **03 Solaris Digital (Client)**:
    - Col1 Img1: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85`
    - Col1 Img2: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85`
    - Col2 Img: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85`

---

## 4. Technical Constraints & Performance Locks
1. **GPU Acceleration**: Heavy transforms (`Magnet`, `Marquee`, sticky scaling) utilize `willChange: 'transform'` and 3D translates (`translate3d`).
2. **Scroll Listeners**: All native window listeners are registered with `{ passive: true }` and throttled using `requestAnimationFrame`.
3. **Typography Resiliency**: All headings and text blocks rely on fluid `clamp()` formulations with fallback sizes for ultra-small (`< 360px`) and ultra-wide (`> 1920px`) screens.
4. **Horizontal Clipping**: Main wrapper enforces `overflowX: 'clip'` to prevent horizontal scrollbars from large scaling elements while maintaining sticky scrolling positions.
