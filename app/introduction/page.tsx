'use client';

import { MarkdownContent } from '@/components/markdown-content';

export default function IntroductionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">What is Containerization?</h1>
      <MarkdownContent>
        {`
Containerization is a modern approach to packaging applications along with all their dependencies into isolated, portable units called containers. This ensures consistency across various environments, from development to production.

## What is Docker?

Docker is an open-source containerization platform that lets you:
- **Package Applications:** Bundle your application with its dependencies.
- **Ensure Consistency:** Run containers in isolated environments.
- **Simplify Development:** Build, ship, and run applications seamlessly across different systems.

## What is Kubernetes?

Kubernetes (often abbreviated as **K8s**) is an open-source platform designed to automate the deployment, scaling, and management of containerized applications. It helps by:
- **Orchestrating Containers:** Managing container deployment across clusters.
- **Handling Load Balancing:** Distributing traffic efficiently.
- **Facilitating Rollouts & Rollbacks:** Streamlining updates and recovery.

## What is KinD (Kubernetes in Docker)?

KinD stands for **Kubernetes in Docker**. It enables you to run Kubernetes clusters inside Docker containers, making it ideal for:
- **Local Testing & Development:** Quickly spin up a Kubernetes cluster on your machine.
- **CI/CD Pipelines:** Create ephemeral clusters for integration testing.
- **Learning & Experimentation:** Explore Kubernetes features without cloud overhead.

### Key Features of KinD

- 🚀 **Quick Cluster Creation:** Set up clusters in minutes.
- 🔄 **Multi-Node Support:** Test complex configurations with multiple nodes.
- 📦 **Docker-Based:** Leverages Docker for lightweight cluster nodes.
- 💻 **Local Development Friendly:** Simulates production-like environments.
- 🛠 **Ideal for Testing & Debugging:** Great for CI/CD and integration tests.

## Why Use KinD in This Code?

This tutorial series uses KinD to introduce container orchestration with Kubernetes because it allows you to:
- **Simulate a Real-World Environment:** Gain hands-on experience with a production-like setup without the need for cloud resources.
- **Rapid Iteration:** Quickly create and delete clusters to test various deployments and services.
- **Simplify Development:** Benefit from Docker's portability combined with Kubernetes' powerful orchestration.
- **Integrate Seamlessly with CI/CD:** Easily incorporate KinD into automated testing and deployment pipelines.
        `}
      </MarkdownContent>
    </div>
  );
}
