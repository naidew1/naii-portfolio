import { services } from "@/app/data";
import { cn } from "../../lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-52 cursor-pointer overflow-hidden rounded-xl p-2",
        // light styles ( DEFAULT )
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "hover:bg-gray-950/5",
        // dark styles SOON, for now dark mode only
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-lg"
          width={32}
          height={32}
          alt="service icon"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="whitespace-nowrap text-sm font-medium text-[#ccc] dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium text-purple-400 dark:text-white/40">
            {username}
          </p> */}
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm text-purple-400">{body}</blockquote> */}
    </figure>
  );
};

export function CMarquee() {
  return (
    <div className="bg-background relative mx-auto mt-4 flex w-[20rem] flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:13s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:13s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0D0D0D]/80 to-transparent"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0D0D0D]/80 to-transparent"></div>
    </div>
  );
}
