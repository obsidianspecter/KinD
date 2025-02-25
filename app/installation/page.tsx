'use client';

import { MarkdownContent } from '@/components/markdown-content';
import { PageTransition } from '@/components/page-transition';

const content = `
# Installing KinD & kubectl

## Installing Docker

First, ensure Docker is installed on your system:

\`\`\`bash
sudo apt update
sudo apt install docker.io -y
\`\`\`

## Installing KinD

Download and install KinD:

\`\`\`bash
curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
kind version
\`\`\`

## Installing kubectl

Install the Kubernetes command-line tool:

\`\`\`bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/kubectl
kubectl version --client
\`\`\`

## Verification

Verify the installations:

\`\`\`bash
docker --version
kind version
kubectl version --client
\`\`\`

Each command should return version information, confirming successful installation.
`;

export default function InstallationPage() {
  return (
    <PageTransition>
      <div className="container py-8">
        <MarkdownContent>{content}</MarkdownContent>
      </div>
    </PageTransition>
  );
}