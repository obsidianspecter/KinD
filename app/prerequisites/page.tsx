'use client';

import { MarkdownContent } from '@/components/markdown-content';
import { CheckCircle } from 'lucide-react';

export default function PrerequisitesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Prerequisites</h1>
      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">Docker</h3>
            <p className="text-muted-foreground">Container runtime required for KinD</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">KinD</h3>
            <p className="text-muted-foreground">Tool for running local Kubernetes clusters</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <div>
            <h3 className="text-xl font-semibold">kubectl</h3>
            <p className="text-muted-foreground">Kubernetes command-line tool</p>
          </div>
        </div>
      </div>
      
      <MarkdownContent className="mt-8">
        {`
## System Requirements

- Linux, macOS, or Windows with WSL2
- 4GB RAM minimum (8GB recommended)
- 20GB free disk space
- Docker installed and running
- Administrative access for installation

## Knowledge Prerequisites

- Basic understanding of:
  - Command-line interface
  - Docker concepts
  - Kubernetes basics
  - YAML syntax
        `}
      </MarkdownContent>
    </div>
  );
}