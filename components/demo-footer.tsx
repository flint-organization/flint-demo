/**
 * DemoFooter component
 * Footer with links to package, documentation, and related resources
 */
export function DemoFooter() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="container">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Built with{' '}
            <a
              href="https://www.npmjs.com/package/@flint-org/ui"
              className="font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @flint-org/ui
            </a>
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://github.com/flint-organtization/flint-ui"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Source
            </a>
            <a
              href="https://flint-organtization.github.io/flint-ui"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storybook
            </a>
            <a
              href="#"
              className="hover:underline text-muted-foreground/60 cursor-not-allowed"
            >
              Documentation (Coming Soon)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
