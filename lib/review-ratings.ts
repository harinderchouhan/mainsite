// Static fallback used until the live Google Places API is connected
// (see lib/google-reviews.ts). Fill in your real numbers here — never
// ship a placeholder rating as if it were real.
//
// rating: your real average, e.g. 4.9
// reviewCount: your real total review count, e.g. 128
// Leave a value `null` to show a "coming soon" state instead of a number.

export type ReviewRating = {
  rating: number | null;
  reviewCount: number | null;
  url: string;
};

export const reviewRatings: { google: ReviewRating; facebook: ReviewRating } = {
  google: {
    rating: 4.8,
    reviewCount: 181,
    url: "https://www.google.com/maps/place/?q=place_id:ChIJTYnIBCX5DjkR4mT1Ykjq7OI",
  },
  facebook: {
    rating: 4.9,
    reviewCount: 132,
    url: "",
  },
};
