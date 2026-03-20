# Purple Deluxe Apartments

A luxury serviced apartment website for Purple Deluxe Apartments, located in Kyanja, Kampala, Uganda.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Email**: SendGrid API
- **Hosting**: GitHub Pages / Vercel / Netlify compatible

## Features

- Responsive landing page with hero section
- Suite listings with image carousels
- Amenities showcase
- Location with Google Maps integration
- Booking inquiry form with SendGrid email delivery
- SEO optimized (sitemap, robots.txt, Open Graph tags)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SENDGRID_API_KEY=your_sendgrid_api_key
```

## Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── layout.tsx     # Root layout with metadata
│   ├── page.tsx       # Home page
│   └── sitemap.ts     # Dynamic sitemap
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # Hero, About, Suites, Amenities, Location
│   └── ui/            # shadcn/ui components
├── hooks/             # Custom React hooks
└── lib/               # Utilities, SendGrid configuration
```

## Author

Developed by Moses Wekesa for Purple Deluxe Apartments.
