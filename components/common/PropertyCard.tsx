import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyCardProps } from "@/interfaces"
import Image from "next/image"

export function PropertyCard({
  id,
  image,
  title,
  location,
  rating,
  price,
  originalPrice,
  badges = [],
  amenities,
}: PropertyCardProps) {
  return (
    <Link href={`/property/${id}`}>

      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <Image src={image || "/placeholder.svg"} width={500} height={48} alt={title} className="object-cover" />
          <Button size="sm" variant="ghost" className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          {badges.map((badge, index) => (
            <Badge key={index} className="absolute top-2 left-2 bg-primary">
              {badge}
            </Badge>
          ))}
        </div>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            {amenities.map((amenity, index) => (
              <span key={index}>
                {amenity}
                {index < amenities.length - 1 && " • "}
              </span>
            ))}
          </div>

          <h3 className="font-semibold text-sm mb-1 line-clamp-1">{title}</h3>
          <p className="text-xs text-muted-foreground mb-2">{location}</p>

          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>

          <div className="flex items-center gap-2">
            {originalPrice && <span className="text-xs text-muted-foreground line-through">${originalPrice}</span>}
            <span className="font-bold">
              ${price}
              <span className="text-xs font-normal text-muted-foreground">/n</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
