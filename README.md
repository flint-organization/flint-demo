# Flint Demo

Comprehensive demo application showcasing [@flint-org/ui](https://www.npmjs.com/package/@flint-org/ui) components in real-world applications.

## 🎨 Features

- **Full Dashboard** - Analytics, activity, team management, projects, reports, users, settings
- **Data Tables** - Advanced tables with sorting, filtering, and pagination examples
- **Forms & Validation** - Multi-step forms with comprehensive validation
- **Charts & Visualizations** - Interactive charts using Recharts integration
- **Theme Switching** - Light/dark mode with `next-themes`
- **Responsive Layouts** - Mobile, tablet, and desktop optimized
- **Animated Components** - All Framer Motion animations in action
- **Loading States** - Skeleton loaders and loading indicators
- **Error Boundaries** - Graceful error handling throughout

## 🔗 Links

- 📦 [NPM Package](https://www.npmjs.com/package/@flint-org/ui)
- 📚 [Documentation](https://docs.flint-ui.com) _(Coming Soon)_
- 📖 [Storybook](https://flint-organtization.github.io/flint-ui)
- 🐙 [Component Source](https://github.com/flint-organtization/flint-ui)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the demo.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript type checking
pnpm clean        # Clean build artifacts
```

## 📂 Project Structure

```
flint-demo/
├── app/              # Next.js App Router pages
│   ├── dashboard/    # Dashboard pages
│   │   ├── page.tsx           # Main dashboard
│   │   ├── analytics/         # Analytics page
│   │   ├── activity/          # Activity feed
│   │   ├── team/              # Team management
│   │   ├── projects/          # Project tracking
│   │   ├── reports/           # Data reports
│   │   ├── users/             # User management
│   │   ├── settings/          # Settings
│   │   ├── notifications/     # Notifications
│   │   ├── help/              # Help center
│   │   ├── api-keys/          # API key management
│   │   └── integrations/      # Integrations
│   ├── profile/      # User profile page
│   ├── settings/     # App settings page
│   ├── page.tsx      # Landing page
│   └── layout.tsx    # Root layout
├── components/       # Demo-specific components
│   ├── dashboard/    # Dashboard components
│   ├── landing/      # Landing page components
│   ├── layout/       # Layout components
│   ├── demo-banner.tsx      # Demo banner component
│   ├── demo-footer.tsx      # Demo footer component
│   └── view-source.tsx      # View source button
├── store/           # Zustand state stores
│   ├── user-store.ts         # User state
│   ├── settings-store.ts     # App settings
│   └── theme-store.ts        # Theme state
├── lib/             # Utilities and helpers
├── types/           # TypeScript type definitions
└── hooks/           # Custom React hooks
```

## 🎯 What's Included

### Dashboard Pages

- **Analytics** - Charts, metrics, and data visualizations
- **Activity** - Real-time activity feed with filtering
- **Team** - Team member management and roles
- **Projects** - Project tracking with status updates
- **Reports** - Comprehensive data reports with exports
- **Users** - User management with data tables
- **Settings** - Multi-tab settings configuration
- **Notifications** - Notification preferences
- **Help** - Help center and support
- **API Keys** - API key generation and management
- **Integrations** - Third-party integrations

### Component Examples

✅ **Data Tables**
- Sortable columns
- Advanced filtering
- Pagination
- Row selection
- Export functionality

✅ **Forms**
- Multi-step forms
- Form validation
- Input components
- File uploads
- Rich text editing

✅ **Charts**
- Line charts
- Bar charts
- Area charts
- Pie charts
- Interactive tooltips

✅ **UI Components**
- Buttons and inputs
- Cards and modals
- Dropdowns and menus
- Tabs and accordions
- Badges and alerts
- Loading states
- Empty states

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org)** - React framework
- **[@flint-org/ui](https://www.npmjs.com/package/@flint-org/ui)** - Component library
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion)** - Animation library
- **[Zustand](https://github.com/pmndrs/zustand)** - State management
- **[Recharts](https://recharts.org)** - Chart library
- **[React Query](https://tanstack.com/query)** - Data fetching
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

## 📦 Using @flint-org/ui

This demo uses the published NPM package:

```json
{
  "dependencies": {
    "@flint-org/ui": "^0.0.1"
  }
}
```

### Importing Components

```tsx
import { Button, Card, DataTable } from '@flint-org/ui';
import '@flint-org/ui/styles';

export default function MyPage() {
  return (
    <Card>
      <h2>Hello World</h2>
      <Button>Click Me</Button>
    </Card>
  );
}
```

### Tailwind Configuration

The demo uses the Flint UI Tailwind preset:

```typescript
// tailwind.config.ts
import flintPreset from '@flint-org/ui/preset';

export default {
  presets: [flintPreset],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@flint-org/ui/dist/**/*.js',
  ],
};
```

## 🚢 Deployment

### Vercel (Recommended)

Vercel automatically deploys your app when connected to GitHub:

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Import the `flint-demo` repository
   - Vercel auto-detects Next.js settings

2. **Configure Build** (auto-detected)
   - Framework Preset: `Next.js`
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

3. **Deploy Automatically**
   - Push to `main` → Production deployment
   - Open PR → Preview deployment
   - No GitHub Actions needed for deployment!

The demo includes GitHub Actions for **CI only** (lint, typecheck, build verification).

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

This demo showcases the `@flint-org/ui` component library. To contribute to the component library itself, visit:

- [flint-ui Repository](https://github.com/flint-organtization/flint-ui)

To suggest improvements to this demo:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT

---

**Built with ❤️ using [@flint-org/ui](https://www.npmjs.com/package/@flint-org/ui)**
