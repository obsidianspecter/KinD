'use client';

import { MarkdownContent } from '@/components/markdown-content';

export default function CleanupPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Cleaning Up</h1>
      <MarkdownContent>
        {`
## Removing Resources

Clean up the deployed resources:

\`\`\`bash
# Delete the deployment
kubectl delete deployment nginx-deployment

# Delete the service
kubectl delete service nginx-service
\`\`\`

## Deleting the Cluster

Remove the KinD cluster:

\`\`\`bash
kind delete cluster --name my-cluster
\`\`\`

## Verification

Verify cleanup:

\`\`\`bash
# Check for any remaining clusters
kind get clusters

# Check for any remaining resources
kubectl get all --all-namespaces
\`\`\`

## Next Steps

After cleanup, you can:
- Create a new cluster with different configurations
- Try deploying different applications
- Explore more Kubernetes features
- Learn about Helm charts and operators
        `}
      </MarkdownContent>
    </div>
  );
}