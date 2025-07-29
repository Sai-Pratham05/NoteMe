import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import { World } from "./ui/globe";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
} as const;

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.5}
                  as="h1"
                  className="mt-8 max-w-2xl text-balance text-4xl sm:text-5xl font-medium md:text-6xl lg:mt-16"
                >
                  Capture Every Thought, Effortlessly.
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.4}
                  delay={0.8}
                  as="p"
                  className="mt-8 max-w-2xl text-pretty text-base sm:text-lg"
                >
                  Your personal space to jot down ideas, organize tasks, and
                  remember everything important. Designed for clarity and speed.
                  🚀🧠
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.08,
                          delayChildren: 0.5,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-2"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 w-full sm:w-auto"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base w-full"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Taking Notes </span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base w-full sm:w-auto"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Explore Features </span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.2,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-7xl overflow-hidden rounded-2xl border shadow-lg shadow-zinc-950/15 ring-1 aspect-video h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-4 sm:pt-6 px-4">
                    We Will Take Over the Globe
                  </h1>
                  <World
                    globeConfig={{
                      pointSize: 4,
                      globeColor: "#062056",
                      showAtmosphere: true,
                      atmosphereColor: "#FFFFFF",
                      atmosphereAltitude: 0.1,
                      emissive: "#062056",
                      emissiveIntensity: 0.1,
                      shininess: 0.9,
                      polygonColor: "rgba(255,255,255,0.7)",
                      ambientLight: "#38bdf8",
                      directionalLeftLight: "#ffffff",
                      directionalTopLight: "#ffffff",
                      pointLight: "#ffffff",
                      arcTime: 1000,
                      arcLength: 0.4,
                      rings: 1,
                      maxRings: 3,
                      initialPosition: { lat: 22.3193, lng: 114.1694 },
                      autoRotate: true,
                      autoRotateSpeed: 1,
                    }}
                    data={[
                      {
                        order: 1,
                        startLat: 64.2008,
                        startLng: -21.8174,
                        endLat: 33.93911,
                        endLng: 67.709953,
                        arcAlt: 0.1,
                        color: "#06b6d4",
                      },
                      {
                        order: 1,
                        startLat: 28.6139,
                        startLng: 77.209,
                        endLat: 3.139,
                        endLng: 101.6869,
                        arcAlt: 0.2,
                        color: "#3b82f6",
                      },
                      {
                        order: 1,
                        startLat: -14.235,
                        startLng: -51.9253,
                        endLat: 36.2048,
                        endLng: 138.2529,
                        arcAlt: 0.5,
                        color: "#06b6d4",
                      },
                      {
                        order: 2,
                        startLat: 22.3193,
                        startLng: 114.1694,
                        endLat: 26.8206,
                        endLng: 30.8025,
                        arcAlt: 0.2,
                        color: "#3b82f6",
                      },
                      {
                        order: 2,
                        startLat: 34.0522,
                        startLng: -118.2437,
                        endLat: 48.8566,
                        endLng: 2.3522,
                        arcAlt: 0.2,
                        color: "#06b6d4",
                      },
                    ]}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
