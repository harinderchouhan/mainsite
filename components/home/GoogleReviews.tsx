import { Star, ArrowUpRight } from "lucide-react";
import { getGoogleReviews } from "@/lib/google-reviews";
import { reviewRatings } from "@/lib/review-ratings";
import { GoogleIcon, FacebookIcon } from "@/components/icons/SocialIcons";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-border text-border"
          }`}
        />
      ))}
    </div>
  );
}

function RatingCard({
  icon,
  iconClassName,
  label,
  rating,
  reviewCount,
  url,
}: {
  icon: React.ReactNode;
  iconClassName?: string;
  label: string;
  rating: number | null;
  reviewCount: number | null;
  url: string;
}) {
  const card = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand-200">
      <span className={iconClassName}>{icon}</span>
      <div className="min-w-0 flex-1">
        {rating !== null ? (
          <>
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-foreground">
                {rating.toFixed(1)}
              </span>
              <Stars rating={rating} />
            </div>
            <p className="mt-1 truncate text-xs text-muted">
              {reviewCount !== null
                ? `${reviewCount} ${label} reviews`
                : `${label} rating`}
            </p>
          </>
        ) : (
          <p className="text-sm text-muted">{label} reviews coming soon</p>
        )}
      </div>
      {url ? (
        <ArrowUpRight className="size-5 shrink-0 text-brand-500" />
      ) : null}
    </div>
  );

  if (!url) return card;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`See reviews on ${label}`}
    >
      {card}
    </a>
  );
}

export async function GoogleReviews() {
  const live = await getGoogleReviews();
  const google = live
    ? { rating: live.rating, reviewCount: live.userRatingsTotal, url: live.mapsUrl }
    : reviewRatings.google;
  const facebook = reviewRatings.facebook;

  return (
    <div className="mx-auto flex h-full w-full min-w-0 max-w-md flex-col justify-center gap-4 lg:mx-0">
      <RatingCard
        icon={<GoogleIcon className="size-8" />}
        label="Google"
        rating={google.rating}
        reviewCount={google.reviewCount}
        url={google.url}
      />
      <RatingCard
        icon={<FacebookIcon className="size-8" />}
        iconClassName="text-[#1877F2]"
        label="Facebook"
        rating={facebook.rating}
        reviewCount={facebook.reviewCount}
        url={facebook.url}
      />
    </div>
  );
}
