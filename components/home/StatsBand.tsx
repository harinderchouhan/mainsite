import { Users, Award, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getGoogleReviews } from "@/lib/google-reviews";
import { reviewRatings } from "@/lib/review-ratings";
import { GoogleIcon, FacebookIcon } from "@/components/icons/SocialIcons";

export async function StatsBand() {
  const live = await getGoogleReviews();
  const google = live
    ? { rating: live.rating, reviewCount: live.userRatingsTotal }
    : reviewRatings.google;
  const facebook = reviewRatings.facebook;

  const stats: { icon: React.ReactNode; value: string; label: string }[] = [
    {
      icon: <Users className="size-4 text-brand-600" />,
      value: "1000+",
      label: "Clients served",
    },
    {
      icon: <Award className="size-4 text-brand-600" />,
      value: "12+",
      label: "Years of experience",
    },
    {
      icon: <CheckCircle2 className="size-4 text-brand-600" />,
      value: "1200+",
      label: "Projects completed",
    },
    {
      icon: <GoogleIcon className="size-4" />,
      value: google.rating ? `${google.rating.toFixed(1)}★` : "—",
      label: "Google rating",
    },
    {
      icon: <FacebookIcon className="size-4 text-[#1877F2]" />,
      value: facebook.rating ? `${facebook.rating.toFixed(1)}★` : "—",
      label: "Facebook rating",
    },
  ];

  return (
    <Container className="relative z-10 -mt-6 sm:-mt-8">
      <div className="grid grid-cols-3 gap-x-2 gap-y-4 rounded-2xl border border-border bg-background/95 px-3 py-4 shadow-sm shadow-brand-900/5 backdrop-blur-sm sm:flex sm:flex-nowrap sm:items-center sm:justify-between sm:gap-x-4 sm:px-6 sm:py-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 text-center sm:flex-row sm:items-center sm:gap-2 sm:text-left"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-white">
              {stat.icon}
            </span>
            <div className="sm:whitespace-nowrap">
              <span className="font-display text-sm font-bold text-foreground sm:text-lg">
                {stat.value}
              </span>{" "}
              <span className="block text-[11px] leading-tight text-muted sm:inline sm:text-sm">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
