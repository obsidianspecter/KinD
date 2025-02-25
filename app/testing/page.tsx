'use client';

import { MarkdownContent } from '@/components/markdown-content';

export default function TestingPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Testing the Application</h1>
      <MarkdownContent>
        {`
## Verifying Deployment Status

Check the status of all components:

\`\`\`bash
# Check pods
kubectl get pods

# Check services
kubectl get services

# Check deployments
kubectl get deployments
\`\`\`

## Testing Connectivity

Test the application:

\`\`\`bash
# Forward the port
kubectl port-forward svc/nginx-service 8080:80

# In a new terminal, test using curl
curl http://localhost:8080
\`\`\`

## Monitoring Logs

View application logs:

\`\`\`bash
# Get pod name
kubectl get pods

# View logs
kubectl logs <pod-name>

# Follow logs in real-time
kubectl logs -f <pod-name>
\`\`\`

## Health Checks

Verify pod health:

\`\`\`bash
# Describe pod for detailed status
kubectl describe pod <pod-name>

# Check node status
kubectl get nodes -o wide
\`\`\`
        `}
      </MarkdownContent>
    </div>
  );
}