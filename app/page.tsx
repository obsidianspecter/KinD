'use client';

import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-12 sm:py-24 flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Terminal className="w-20 h-20 md:w-24 md:h-24 text-primary" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter"
        >
          Deploying Kubernetes using KinD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl"
        >
          A comprehensive guide to creating clusters and deploying applications using Kubernetes in Docker
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/introduction">
            <Button size="lg" className="text-lg">
              Start Learning
            </Button>
          </Link>
          <Link href="https://kind.sigs.k8s.io/" target="_blank">
            <Button size="lg" variant="outline" className="text-lg">
              KinD Documentation
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
