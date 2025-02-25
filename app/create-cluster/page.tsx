'use client';

import { MarkdownContent } from '@/components/markdown-content';

export default function CreateClusterPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Creating a KinD Cluster</h1>
      <MarkdownContent>
        {`
## Simple Cluster Creation

Create a basic single-node cluster:

\`\`\`bash
kind create cluster --name my-cluster
\`\`\`

Verify the cluster:

\`\`\`bash
kubectl cluster-info
kubectl get nodes
\`\`\`

## Multi-Node Cluster

For a more advanced setup, create a configuration file (\`kind-cluster.yaml\`):

\`\`\`yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
  - role: worker
  - role: worker
\`\`\`

Create the cluster using the config:

\`\`\`bash
kind create cluster --name my-cluster --config kind-cluster.yaml
\`\`\`

## Cluster Management

Common cluster management commands:

\`\`\`bash
# List all clusters
kind get clusters

# Switch context
kubectl config use-context kind-my-cluster

# Check node status
kubectl get nodes -o wide
\`\`\`
        `}
      </MarkdownContent>
    </div>
  );
}