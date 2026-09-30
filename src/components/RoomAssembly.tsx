import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { motion, useTransform, type MotionValue } from "framer-motion";

import emptyRoom from "@/assets/assembly-empty-room.jpg";
import sofa from "@/assets/assembly-sofa.png";
import rug from "@/assets/assembly-rug.png";
import table from "@/assets/assembly-table.png";
import plant from "@/assets/assembly-plant.png";
import art from "@/assets/assembly-art.png";
import lamp from "@/assets/assembly-lamp.png";

// Wide landscape viewports group the room to the right so the hero's chalk card (left) covers only bare floor.
const cutouts = [
  {
    name: "Rug",
    src: rug,
    className:
      "left-[19%] bottom-[1%] z-[1] w-[61%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:left-[60%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:bottom-0 [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:w-[34%]",
  },
  {
    name: "Wall art",
    src: art,
    className:
      "left-[46%] top-[11%] z-[2] w-[12%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:left-[73.5%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:top-[22%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:w-[7%]",
  },
  {
    name: "Sofa",
    src: sofa,
    className:
      "left-[25%] bottom-[10%] z-[3] w-[54%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:left-[63%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:bottom-[21.5%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:w-[28%]",
  },
  {
    name: "Plant",
    src: plant,
    className:
      "left-[8%] bottom-[7%] z-[4] w-[15%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:left-[58.5%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:bottom-[28%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:w-[9%]",
  },
  {
    name: "Floor lamp",
    src: lamp,
    className:
      "right-[9%] bottom-[8%] z-[4] w-[11%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:right-auto [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:left-[86%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:bottom-[33%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:w-[12%]",
  },
  {
    name: "Coffee table",
    src: table,
    className:
      "left-[40%] bottom-[1%] z-[5] w-[22%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:left-[71%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:bottom-[5.5%] [@media(min-width:768px)_and_(min-aspect-ratio:3/2)]:w-[12%]",
  },
];

// Overlapping slices so one piece is still settling as the next begins; build completes at 0.9.
const sliceStart = (index: number) => index * 0.13;
const sliceEnd = (index: number) => sliceStart(index) + 0.25;

export function piecesPlacedAt(progress: number) {
  return cutouts.filter((_, index) => progress >= (sliceStart(index) + sliceEnd(index)) / 2).length;
}

const pieces = [
  {
    name: "Rug",
    src: rug,
    className: "left-[28%] bottom-[-4%] z-[1] h-[48%] w-[44%]",
    delay: "0ms",
  },
  { name: "Wall art", src: art, className: "left-[45.5%] top-[20%] z-[2] w-[9%]", delay: "190ms" },
  { name: "Sofa", src: sofa, className: "left-[32%] bottom-[15.3%] z-[3] w-[36%]", delay: "380ms" },
  {
    name: "Plant",
    src: plant,
    className: "left-[24.5%] bottom-[25.2%] z-[4] w-[11.5%]",
    delay: "570ms",
  },
  {
    name: "Floor lamp",
    src: lamp,
    className: "left-[61.8%] bottom-[29.6%] z-[4] w-[15%]",
    delay: "760ms",
  },
  {
    name: "Coffee table",
    src: table,
    className: "left-[42.25%] bottom-[3.6%] z-[5] w-[15.5%]",
    delay: "950ms",
  },
];

export function RoomAssembly() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.38 });

  return (
    <section className="px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1480px]">
        <RevealHeading />

        <div ref={ref} className="mt-14 md:mt-20">
          <RoomStage placed={inView ? pieces.length : 0} staggered />

          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <p className="eyebrow">From empty room to lived-in space</p>
            <p className="eyebrow opacity-60">Motion study</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoomStage({
  placed,
  staggered = false,
  progress,
}: {
  placed: number;
  staggered?: boolean;
  progress?: MotionValue<number>;
}) {
  if (progress) return <ScrubbedRoom progress={progress} />;

  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-muted"
      role="img"
      aria-label="An empty living room filling with a rug, art, sofa, plant, lamp, and coffee table"
    >
      <img
        src={emptyRoom}
        alt="Empty warm minimalist living room"
        loading="lazy"
        width={1536}
        height={864}
        className="photo-grade absolute inset-0 h-full w-full object-cover"
      />
      {pieces.map((piece, index) => (
        <img
          key={piece.name}
          src={piece.src}
          alt=""
          aria-hidden
          loading="lazy"
          className={cn(
            "assembly-piece absolute h-auto",
            piece.className,
            index < placed && "is-assembled",
          )}
          style={staggered ? { animationDelay: piece.delay } : undefined}
        />
      ))}
      <span className="eyebrow absolute right-3 bottom-3 z-10 bg-chalk px-2 py-1 text-burgundy sm:right-5 sm:bottom-5">
        Room · Placeholder
      </span>
    </div>
  );
}

function ScrubbedRoom({ progress }: { progress: MotionValue<number> }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-cream"
      role="img"
      aria-label="Placeholder illustration: an empty living room filling with a rug, wall art, sofa, plant, floor lamp, and coffee table"
    >
      <img
        src={emptyRoom}
        alt=""
        width={1536}
        height={864}
        className="photo-grade absolute inset-0 h-full w-full object-cover"
      />
      {cutouts.map((piece, index) => (
        <ScrubbedPiece key={piece.name} piece={piece} index={index} progress={progress} />
      ))}
    </div>
  );
}

function ScrubbedPiece({
  piece,
  index,
  progress,
}: {
  piece: (typeof cutouts)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  // Function form avoids Framer's native ViewTimeline opacity offload, which doesn't hold at 1.
  const t = useTransform(progress, (value) =>
    Math.min(1, Math.max(0, (value - sliceStart(index)) / (sliceEnd(index) - sliceStart(index)))),
  );
  const y = useTransform(t, [0, 1], ["18%", "0%"]);
  const scale = useTransform(t, [0, 1], [0.92, 1]);

  return (
    <motion.img
      src={piece.src}
      alt=""
      aria-hidden
      style={{ opacity: t, y, scale, transformOrigin: "50% 85%" }}
      className={cn("absolute h-auto", piece.className)}
    />
  );
}

function RevealHeading() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", inView && "is-visible")}>
      <p className="eyebrow">[ A Room, Assembled ]</p>
      <h2 className="font-display mt-6 max-w-3xl text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
        Watch the room find its rhythm, one piece at a time.
      </h2>
    </div>
  );
}
