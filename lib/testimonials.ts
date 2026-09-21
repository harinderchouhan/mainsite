export type VideoTestimonial = {
  id: string;
  video: string;
  poster: string;
  /** Placeholder until the real client name is confirmed — never invent one. */
  name: string;
  /** The client's real business name — omit until confirmed, never invent one. */
  business?: string;
  duration: number;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "video-1",
    video: "/testimonials/videos/video-1.mp4",
    poster: "/testimonials/posters/video-1.jpg",
    name: "Client testimonial",
    duration: 65,
  },
  {
    id: "video-2",
    video: "/testimonials/videos/video-2.mp4",
    poster: "/testimonials/posters/video-2.jpg",
    name: "Client testimonial",
    duration: 36,
  },
  {
    id: "video-3",
    video: "/testimonials/videos/video-3.mp4",
    poster: "/testimonials/posters/video-3.jpg",
    name: "Client testimonial",
    duration: 44,
  },
  {
    id: "video-4",
    video: "/testimonials/videos/video-4.mp4",
    poster: "/testimonials/posters/video-4.jpg",
    name: "Client testimonial",
    duration: 33,
  },
  {
    id: "video-john-ross",
    video: "/testimonials/videos/video-john-ross.mp4",
    poster: "/testimonials/posters/video-john-ross.jpg",
    name: "John Ross",
    duration: 59,
  },
];
