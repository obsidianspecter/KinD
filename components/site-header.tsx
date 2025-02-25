'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { Github, Linkedin } from 'lucide-react';

const navigation = [
  { name: 'Introduction', href: '/introduction' },
  { name: 'Prerequisites', href: '/prerequisites' },
  { name: 'Installation', href: '/installation' },
  { name: 'Create Cluster', href: '/create-cluster' },
  { name: 'Deploy App', href: '/deploy-app' },
  { name: 'Expose App', href: '/expose-app' },
  { name: 'Testing', href: '/testing' },
  { name: 'Cleanup', href: '/cleanup' },
  { name: 'About Me', href: '/about' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              KinD Tutorial
            </span>
          </Link>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            {navigation.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === item.href
                      ? 'text-foreground'
                      : 'text-foreground/60'
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/anvin141"
            target="_blank"
            className="text-foreground/60 hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/obsidianspecter"
            target="_blank"
            className="text-foreground/60 hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}