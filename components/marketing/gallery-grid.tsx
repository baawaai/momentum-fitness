"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/data/gallery";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", ...new Set(GALLERY_IMAGES.map((img) => img.category))];

export function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <Button
            key={cat}
            variant={active === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <FadeIn
            key={image.id}
            delay={index * 0.05}
            className={cn(
              index === 0 && "sm:col-span-2 sm:row-span-2",
              "group relative overflow-hidden rounded-xl"
            )}
          >
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-xl",
                index === 0 && "sm:aspect-auto sm:h-full sm:min-h-[400px]"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {image.category}
                </span>
                <p className="mt-2 text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
