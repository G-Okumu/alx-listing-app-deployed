import Image from "next/image"

interface PropertyReviewsProps {
  rating: number
  reviewCount: number
}

const reviews = [
  {
    id: 1,
    name: "Kerry",
    avatar: "/assets/placeholder.svg",
    timeOnPlatform: "2 years on ALX",
    date: "March 2024",
    tripType: "Family trip",
    review:
      "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking.",
  },
  {
    id: 2,
    name: "Pooja",
    avatar: "/assets/placeholder.svg",
    timeOnPlatform: "1 years on ALX",
    date: "March 2024",
    tripType: "Family trip",
    review:
      "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures.",
  },
  {
    id: 3,
    name: "Cindy & Ben",
    avatar: "/assets/placeholder.svg",
    timeOnPlatform: "1 years on ALX",
    date: "August 2023",
    tripType: "Family trip",
    review:
      "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking.",
  },
  {
    id: 4,
    name: "Marnie",
    avatar: "/assets/placeholder.svg",
    timeOnPlatform: "5 years on ALX",
    date: "January 2023",
    tripType: "Family trip",
    review:
      "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures.",
  },
]

export function PropertyReviews({ rating, reviewCount }: PropertyReviewsProps) {
  return (
    <div className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="text-xl font-semibold text-foreground">{rating}</span>
        <span className="text-muted-foreground">({reviewCount} reviews)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src={review.avatar || "/placeholder.svg"}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-medium text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.timeOnPlatform}</div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {review.date} • {review.tripType}
            </div>

            <p className="text-foreground leading-relaxed">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
