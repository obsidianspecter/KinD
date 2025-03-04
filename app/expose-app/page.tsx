'use client';

import { MarkdownContent } from '@/components/markdown-content';

export default function ExposeAppPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Exposing the Application</h1>
      <MarkdownContent>
        {`
> **Note for Windows Users:** If you're on Windows and have installed \`kubectl\` as \`kubectl.exe\`, replace \`kubectl\` with \`kubectl.exe\` in your commands.

## Creating a Service

Create a service configuration (\`nginx-service.yaml\`):

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: NodePort
\`\`\`

## Applying the Service

Create the service:

\`\`\`bash
kubectl apply -f nginx-service.yaml
\`\`\`

## Accessing the Application

Forward the port:

\`\`\`bash
kubectl port-forward svc/nginx-service 8080:80
\`\`\`

The application will be available at \`http://localhost:8080\`

## Viewing Service Details

Check service status:

\`\`\`bash
# List all services
kubectl get services

# Get detailed service information
kubectl describe service nginx-service
\`\`\`
        `}
      </MarkdownContent>
    </div>
  );
}
