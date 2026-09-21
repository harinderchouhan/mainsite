"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { videoTestimonials } from "@/lib/testimonials";

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function VideoCard({
  item,
  onPlay,
}: {
  item: (typeof videoTestimonials)[number];
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group flex w-44 shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-sm transition-shadow duration-200 hover:shadow-md sm:w-52"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-foreground/5">
        <Image
          src={item.poster}
          alt={`Video testimonial from ${item.name}`}
          fill
          sizes="208px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/10" />

        <span className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
          {formatDuration(item.duration)}
        </span>

        <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-warm shadow-lg transition-transform duration-200 group-hover:scale-110">
          <Play className="ml-0.5 size-5 fill-current" />
        </span>
      </div>

      <div className="flex flex-col gap-0.5 border-t border-border px-3 py-2.5">
        <span className="truncate text-xs font-semibold text-foreground">
          {item.name}
        </span>
        <span className="truncate text-[11px] text-muted">
          {item.business ?? "Verified client"}
        </span>
      </div>
    </button>
  );
}

export function VideoTestimonials() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const playing = videoTestimonials.find((v) => v.id === playingId);
  const loop = [...videoTestimonials, ...videoTestimonials];

  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="animate-marquee flex w-max gap-3"
          style={{
            // roughly 4.5s per card feels smooth without being frantic
            "--marquee-duration": `${videoTestimonials.length * 4.5}s`,
            animationPlayState: paused || playingId ? "paused" : "running",
          } as React.CSSProperties}
        >
          {loop.map((item, i) => (
            <VideoCard
              key={`${item.id}-${i}`}
              item={item}
              onPlay={() => setPlayingId(item.id)}
            />
          ))}
        </div>
      </div>

      {playing ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setPlayingId(null)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setPlayingId(null)}
              className="absolute -top-12 right-0 flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            <video
              key={playing.id}
              src={playing.video}
              poster={playing.poster}
              controls
              autoPlay
              className="max-h-[80vh] w-full rounded-2xl bg-black shadow-2xl"
            />
            <p className="mt-3 text-center text-sm font-medium text-white/80">
              {playing.name}
              {playing.business ? (
                <span className="text-white/50"> · {playing.business}</span>
              ) : null}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
