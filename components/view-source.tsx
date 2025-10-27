import { ExternalLink } from 'lucide-react';
import { Button } from '@flint-org/ui';

interface ViewSourceProps {
  path: string;
}

/**
 * ViewSource component
 * Renders a button that links to the GitHub source code for a given file
 */
export function ViewSource({ path }: ViewSourceProps) {
  const githubUrl = `https://github.com/flint-organtization/flint-demo/blob/main/${path}`;

  return (
    <Button variant="outline" size="sm" asChild>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        View Source
        <ExternalLink className="h-3 w-3" />
      </a>
    </Button>
  );
}
