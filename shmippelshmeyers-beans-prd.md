Shmipple Shmeyers Beans Marketing Site PRD
(Informational only — no payments, no forms, no CMS, no deployment notes)

1. Goal
Create a fast, single-page (scrolling) experience that:

Introduces the brand story.

Explains why the beans are special.

Shows the current product lineup.

Provides a simple way to get in touch.

2. Page / Section Outline
Section (anchor)	Content Elements	Notes
Hero / Why Choose Us (/#why)	• One-sentence value prop
• 3-4 bullet proof-points (e.g., “Roasted weekly”, “Ethically sourced”, “Playful flavor notes”, “Free U.S. shipping $35+”)	This is the first viewport.
About Us (/#about)	• 2 paragraphs: origin story + mission
• Founders photo or roastery shot	Keep copy < 120 words.
Our Products (/#products)	• Grid of product cards (bag mock-ups)
• Each card: name, roast profile, tasting notes, weight, price (OPTIONAL)
• “Email to order” link (mailto:)	Static images only, no cart.
Contact Us (/#contact)	• Plain text email address + social icons
• Physical address & hours (optional)	No form processing.

All sections live on a single index.html for v1; navigation is smooth-scroll links in the top navbar.

3. Design & UX Hints
Palette: kraft-paper browns, accent orange-brown #C86A32, off-white text.

Typeface: Playful serif for headings, clean sans for body.

Micro-animation: fade-in on scroll; subtle bean “parallax” in hero.

Image budget: ≤ 300 KB total; use WebP/AVIF.

4. Non-Functional Requirements (Only the essentials)
Item	Target
First Contentful Paint	≤ 1 s (mobile 4G)
Accessibility	Basic WCAG AA (alt text, focus outline)
SEO	Unique <title> & meta description; Open-Graph tags

5. Rough Timeline (5 days)
Day	Task
1	Approve copy & images
2	Build static layout + navbar anchors
3	Style hero & about sections
4	Add product grid & contact details
5	Accessibility / performance pass, stakeholder review

