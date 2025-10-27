"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type WhatsAppFabProps = {
  href: string;
  className?: string;
};

export function WhatsAppFab({ href, className }: WhatsAppFabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className={cn("fixed bottom-6 right-6 z-40", className)}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-forest/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        aria-label="Chat with Abahlengi on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </motion.div>
  );
}
