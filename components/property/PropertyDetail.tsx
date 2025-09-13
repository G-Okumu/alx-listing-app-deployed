import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PropertyDetailsProps {
  property: {
    beds: number
    baths: number
    area: number
    address: string
  }
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="border-b border-gray-200 pb-8">
      {/* Property specs */}
      <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
          </svg>
          <span>{property.beds} Bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v3a2 2 0 002 2h4a2 2 0 002-2v-3"
            />
          </svg>
          <span>{property.baths} Bathroom</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          <span>{property.area} guests</span>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="amenities">What we offer</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="host">About host</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-4">
          <div className="text-muted-foreground text-sm mb-2">Published July 01, 2024</div>
          <div className="text-foreground leading-relaxed">
            {showMore ? property.address : `${property.address.slice(0, 300)}...`}
          </div>
          <button onClick={() => setShowMore(!showMore)} className="text-primary hover:underline font-medium">
            {showMore ? "Read less" : "Read more →"}
          </button>

          <div className="mt-6">
            <h3 className="font-semibold text-foreground mb-2">The space</h3>
            <div className="text-foreground">
              <div className="font-medium">BEDROOM & BATHROOM</div>
              <div className="text-muted-foreground mt-1">
                • Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity,
                Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
