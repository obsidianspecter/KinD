'use client';

import { MarkdownContent } from '@/components/markdown-content';

export default function IntroductionPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">What is KinD?</h1>
      <MarkdownContent>
        {`
## Overview

KinD (Kubernetes in Docker) is a powerful tool that enables you to run Kubernetes clusters inside Docker containers. It's designed specifically for:

- **Local Testing**: Perfect for developers who need to test their applications in a Kubernetes environment
- **CI/CD Pipelines**: Ideal for running integration tests in automated workflows
- **Learning & Experimentation**: Great for learning Kubernetes without cloud costs

## Key Features

- 🚀 Quick cluster creation
- 🔄 Multi-node support
- 📦 Docker-based
- 💻 Local development friendly
- 🛠 Testing and debugging capabilities

## Why Use KinD?

KinD offers several advantages for developers and teams:

1. **Lightweight**: Runs entirely in Docker containers
2. **Fast**: Quick to start and stop clusters
3. **Portable**: Works consistently across different environments
4. **Cost-effective**: Free alternative to cloud-based solutions
5. **Production-like**: Provides a realistic Kubernetes environment
        `}
      </MarkdownContent>
    </div>
  );
}