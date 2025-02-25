'use client';

import { useEffect, useState } from 'react';
import { MarkdownContent } from '@/components/markdown-content';
import { PageTransition } from '@/components/page-transition';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </motion.a>
);

export default function AboutPage() {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/anvin141/anvin141/main/README.md')
      .then((res) => res.text())
      .then((text) => setReadme(text));
  }, []);

  return (
    <PageTransition>
      <div className="container py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <Card className="p-6">
            <div className="grid gap-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-semibold">Connect with me</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SocialLink 
                      href="https://github.com/anvin141"
                      icon={Github}
                      label="GitHub"
                    />
                    <SocialLink 
                      href="https://linkedin.com/in/obsidianspecter"
                      icon={Linkedin}
                      label="LinkedIn"
                    />
                    <SocialLink 
                      href="mailto:anvinpshibu@gmail.com"
                      icon={Mail}
                      label="Email"
                    />
                    <SocialLink 
                      href="https://instagram.com/_a.nvi.n_"
                      icon={Instagram}
                      label="Instagram"
                    />
                    <SocialLink 
                      href="https://twitter.com/obsidianspecter"
                      icon={Twitter}
                      label="Twitter"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Image
                      src="https://api.daily.dev/devcards/v2/QQTFGUsUSjB5UvuoLzlQ1.png?type=default&r=vdm"
                      alt="Dev Card"
                      width={300}
                      height={420}
                      className="rounded-lg shadow-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MarkdownContent>{readme}</MarkdownContent>
        </motion.div>
      </div>
    </PageTransition>
  );
}