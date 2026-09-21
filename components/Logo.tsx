import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/hanuit-logo.png"
      alt="HanuiT Solutions"
      width={1536}
      height={577}
      priority
      className={cn("h-10 w-auto sm:h-11", className)}
    />
  );
}
