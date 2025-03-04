'use client';

import { MarkdownContent } from '@/components/markdown-content';

export default function DeployAppPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Deploying an Application</h1>
      <MarkdownContent>
        {`
> **Note for Windows Users:** If you're on Windows and have installed \`kubectl\` as \`kubectl.exe\`, use that executable name in your commands (e.g., \`kubectl.exe apply -f nginx-deployment.yaml\`).

## Creating a Deployment

Create a deployment configuration file (\`nginx-deployment.yaml\`):

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
\`\`\`

## Applying the Deployment

Deploy the application:

\`\`\`bash
kubectl apply -f nginx-deployment.yaml
\`\`\`

## Monitoring the Deployment

Check deployment status:

\`\`\`bash
# Check deployment status
kubectl get deployments

# Check pods status
kubectl get pods

# View detailed pod information
kubectl describe pod <pod-name>
\`\`\`

## Scaling the Deployment

Scale the number of replicas:

\`\`\`bash
kubectl scale deployment nginx-deployment --replicas=3
\`\`\`
        `}
      </MarkdownContent>
    </div>
  );
}
