'use client';

import { MarkdownContent } from '@/components/markdown-content';
import { PageTransition } from '@/components/page-transition';

const content = `
# Installing KinD & kubectl

## Ubuntu Installation

### Installing Docker

First, ensure Docker is installed on your system:

\`\`\`bash
sudo apt update
sudo apt install docker.io -y
\`\`\`

### Installing KinD

Download and install KinD:

\`\`\`bash
curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
kind version
\`\`\`

### Installing kubectl

Install the Kubernetes command-line tool:

\`\`\`bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/kubectl
kubectl version --client
\`\`\`

### Verification

Verify the installations:

\`\`\`bash
docker --version
kind version
kubectl version --client
\`\`\`

## Windows Installation

### Installing Docker

For Windows, install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop). Follow the instructions on the Docker website to complete the installation.

### Installing KinD

Download and install KinD for Windows:

\`\`\`powershell
curl.exe -Lo kind.exe https://kind.sigs.k8s.io/dl/latest/kind-windows-amd64.exe
\`\`\`

Then, move \`kind.exe\` to a directory that is included in your system's PATH. You can verify the installation with:

\`\`\`powershell
kind.exe version
\`\`\`

### Installing kubectl

Download kubectl for Windows:

\`\`\`powershell
curl.exe -LO "https://dl.k8s.io/release/$(curl.exe -L -s https://dl.k8s.io/release/stable.txt)/bin/windows/amd64/kubectl.exe"
\`\`\`

Move \`kubectl.exe\` to a folder in your PATH. Then, verify the installation:

\`\`\`powershell
kubectl.exe version --client
\`\`\`

### Verification

Check that Docker, KinD, and kubectl are correctly installed:

\`\`\`powershell
docker --version
kind.exe version
kubectl.exe version --client
\`\`\`
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
