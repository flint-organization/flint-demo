import { Github, Package, BookOpen } from 'lucide-react';

/**
 * DemoBanner component
 * Banner displayed at the top of pages to indicate this is a demo application
 */
export function DemoBanner() {
  return (
    <div className="border-b bg-muted/50 py-3">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-muted-foreground">
            Demo Application for{' '}
            <strong className="font-semibold text-foreground">@flint-org/ui</strong>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.npmjs.com/package/@flint-org/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:underline"
            >
              <Package className="h-3.5 w-3.5" />
              NPM
            </a>
            <a
              href="https://github.com/flint-organtization/flint-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:underline"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href="https://flint-organtization.github.io/flint-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Storybook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
