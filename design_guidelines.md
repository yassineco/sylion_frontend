# SYLION TECH Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern SaaS/Tech aesthetic inspired by Linear, Stripe, and Vercel – clean, high-contrast, motion-forward design emphasizing clarity and technical sophistication.

## Core Design Elements

### Color System
- **Primary Background (Light)**: White `#FFFFFF`
- **Primary Background (Dark)**: Black `#0B0B0B`
- **Accent Gradient**: Purple-to-blue `from-[#4F46E5] to-[#7C3AED]`
- **Text on Light**: Black `#0B0B0B`
- **Text on Dark**: White `#FFFFFF`

**Application**:
- Alternate sections: White → Black → White pattern
- Use gradient exclusively for CTAs, accents, and highlight elements
- High contrast throughout for visual impact

### Typography
- **Primary Font**: Inter (body text, descriptions, labels)
- **Secondary Font**: JetBrains Mono (technical elements, code-like references, secondary headings)
- **Hierarchy**:
  - Hero Headlines: `text-5xl font-bold`
  - Section Titles: `text-3xl to text-4xl font-bold`
  - Body Text: `text-lg`
  - Labels/Captions: `text-sm uppercase`

### Layout System
- **Spacing Units**: Tailwind units of 4, 6, 8, 12, 20, 24 (p-4, py-20, mb-12, etc.)
- **Section Padding**: `py-20` to `py-24` for vertical rhythm
- **Max Widths**: `max-w-xl` for text content
- **Alignment**: Centered content for hero and feature sections

### Component Library

**Hero Section**:
- Min-height: `min-h-[80vh]`
- Centered layout with ShinyText animation on main headline
- Single paragraph subtitle with comfortable line-length
- Primary gradient CTA button
- White background, black text

**KPIs/Stats Section**:
- Dark background (`bg-[#0B0B0B]`)
- Horizontal flex layout with gap-12
- CountUp animated numbers: `text-5xl font-bold`
- Descriptive labels: `text-sm uppercase`
- Display 3 key metrics prominently

**Features Section**:
- White background
- AnimatedList component with slide-up animation
- Center-aligned content
- Section title followed by animated feature list
- Each feature item as a clean text statement

**CTA Section**:
- Dark background matching KPIs
- Large animated headline with ShinyText effect
- Prominent gradient button with generous padding
- Minimal copy, maximum impact

**Buttons**:
- Border radius: `rounded-2xl`
- Padding: `px-6 py-3` (standard), `px-8 py-3` (prominent)
- Gradient background for primary actions
- Hover state: `hover:opacity-90 transition`

### Animation Strategy
- **Use ReactBits Components**:
  - ShinyText for headlines (speed: 2-3)
  - CountUp for numerical data (duration: 2s)
  - AnimatedList with slideUp animation
- **Principle**: Purposeful, fluid animations that enhance rather than distract
- Smooth transitions on interactive elements

### Visual Treatment
- **Shadows**: Soft shadows (`shadow-lg`) sparingly for depth
- **Borders**: Rounded corners (`rounded-2xl`) for modern feel
- **Spacing**: Generous breathing room between sections
- **Contrast**: Stark black/white alternation creates rhythm

## Page Structure

**Homepage Flow**:
1. Hero (white, animated headline)
2. KPIs (black, animated counters)
3. Features (white, animated list)
4. CTA (black, animated headline)

**Additional Pages** (Placeholder structure):
- Products, Services, Pricing, Contact pages follow same alternating pattern
- Maintain consistent spacing and typography hierarchy
- Ready for content expansion

## Images
No hero images specified – design relies on typography, animation, and high contrast for visual impact. If images are added later, maintain the alternating black/white sections and ensure proper contrast.

## Responsive Behavior
- Mobile-first approach with `flex-col` stacking
- Horizontal layouts on desktop with `flex-wrap justify-center`
- Consistent padding adjustments for smaller screens
- Maintain readability and touch-friendly spacing on mobile