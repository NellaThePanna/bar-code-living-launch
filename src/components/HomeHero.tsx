import { Button } from "@/components/ui/button";
import { RoomStage, piecesPlacedAt } from "@/components/RoomAssembly";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";

type HomeHeroProps = {
  animate: boolean;
};

export function HomeHero({ animate }: HomeHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [placed, setPlaced] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const assembled = useMotionValue(1);
  useMotionValueEvent(scrollYProgress, "change", (progress) => setPlaced(piecesPlacedAt(progress)));

  const shownPlaced = reduceMotion ? 6 : placed;
  const textHidden = { opacity: 0, y: reduceMotion ? 0 : 24 };

  return (
    <section
      ref={containerRef}
      aria-labelledby="home-hero-heading"
      className="relative h-[260svh] bg-chalk motion-reduce:h-svh"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* 16:9 stage scaled to cover the viewport, anchored to the floor so pieces are never cropped at the bottom. */}
        <div className="absolute bottom-0 left-1/2 w-[max(100vw,177.78svh)] -translate-x-1/2">
          <RoomStage placed={shownPlaced} progress={reduceMotion ? assembled : scrollYProgress} />
        </div>
        <span className="eyebrow absolute top-6 right-6 z-10 bg-chalk px-2 py-1 text-burgundy md:top-8 md:right-12">
          Pieces placed · 0{shownPlaced} / 06
        </span>

        <motion.div
          initial={textHidden}
          animate={animate ? { opacity: 1, y: 0 } : textHidden}
          transition={{ duration: reduceMotion ? 0.01 : 0.8, ease: "easeOut" }}
          className="absolute inset-x-4 bottom-4 z-10 bg-chalk p-6 sm:inset-x-6 sm:bottom-6 md:right-auto md:bottom-12 md:left-12 md:max-w-2xl md:p-10 lg:left-20"
        >
          <span aria-hidden="true" className="block h-px w-12 bg-burgundy-deep" />
          <h1
            id="home-hero-heading"
            className="mt-5 font-founder text-burgundy text-[clamp(3rem,6vw,6rem)] leading-[0.88] font-medium tracking-[-0.02em]"
          >
            Spaces, Realized.
          </h1>
          <p className="mt-5 max-w-md font-founder-body text-base leading-relaxed text-burgundy md:mt-6 md:text-lg">
            From concept to completion — interior design and fit-out, done right.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 h-12 gap-4 rounded-full bg-burgundy pr-1.5 pl-6 font-founder-body text-xs font-semibold uppercase text-chalk hover:bg-burgundy-deep md:mt-8"
          >
            <a href="#our-creations">
              View Our Work
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-full bg-chalk text-burgundy"
              >
                <ArrowRight className="size-4" />
              </span>
            </a>
          </Button>
        </motion.div>

        <span className="eyebrow absolute top-16 right-6 z-10 bg-chalk px-2 py-1 text-burgundy md:top-auto md:right-12 md:bottom-12">
          Room · Placeholder
        </span>
      </div>
    </section>
  );
}
