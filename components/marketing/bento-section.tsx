"use client";

import { MaterialIcon } from "@/components/ui/material-icon";
import { BENTO_ITEMS } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export function BentoSection() {
  return (
    <section
      id="services"
      className="bg-charcoal-grey px-margin-mobile py-40 md:px-margin-desktop"
    >
      <div className="mx-auto max-w-container-max">
        <FadeIn className="mb-16">
          <h2 className="text-headline-xl mb-4 border-l-4 border-electric-blue pl-4 uppercase text-secondary">
            Core Disciplines
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            Master your physique with our specialized training protocols.
          </p>
        </FadeIn>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-8 md:grid-cols-3">
          {BENTO_ITEMS.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.08}
              className={cn(
                "group relative overflow-hidden border border-white/5 bg-surface-container",
                item.span === 2 && "md:col-span-2"
              )}
            >
              {item.image ? (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full translate-y-4 p-8 transition-transform duration-300 group-hover:translate-y-0">
                    {item.badge && (
                      <span
                        className={cn(
                          "mb-3 inline-block px-3 py-1 text-label-caps",
                          item.badgeClass
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-headline-md mb-2 uppercase text-secondary drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base font-medium text-white opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="relative flex h-full items-center justify-center p-8">
                  <div className="relative z-10 text-center">
                    {item.icon && (
                      <MaterialIcon
                        name={item.icon}
                        filled
                        className="mx-auto mb-4 block text-[64px] text-electric-blue"
                      />
                    )}
                    <h3 className="text-headline-md mb-2 uppercase text-secondary drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="mx-auto max-w-md font-sans text-base font-medium text-white">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-electric-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
