"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...fadeInUp.transition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
