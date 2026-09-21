export type GoogleReview = {
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
};

export type GooglePlaceData = {
  rating: number;
  userRatingsTotal: number;
  reviews: GoogleReview[];
  mapsUrl: string;
};

type PlacesApiReview = {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

type PlacesApiResponse = {
  status: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: PlacesApiReview[];
  };
};

export async function getGoogleReviews(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data: PlacesApiResponse = await res.json();
    if (data.status !== "OK" || !data.result) return null;

    return {
      rating: data.result.rating ?? 0,
      userRatingsTotal: data.result.user_ratings_total ?? 0,
      reviews: (data.result.reviews ?? []).slice(0, 6).map((r) => ({
        authorName: r.author_name,
        authorPhoto: r.profile_photo_url,
        rating: r.rating,
        relativeTime: r.relative_time_description,
        text: r.text,
      })),
      mapsUrl: `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(placeId)}`,
    };
  } catch {
    return null;
  }
}
