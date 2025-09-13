import { Mountain, Waves, ChefHat, User, Sparkles, Wine, Thermometer, Wifi } from "lucide-react"

interface Amenity {
  icon: string
  name: string
}

interface PropertyAmenitiesProps {
  amenities: Amenity[]
}

const iconMap = {
  Mountain,
  Waves,
  ChefHat,
  User,
  Sparkles,
  Wine,
  Thermometer,
  Wifi,
}

export function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  return (
    <div className="border-b border-gray-200 py-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">What this place offers</h2>
      <p className="text-muted-foreground mb-6">
        Each home is fully equipped to meet your needs, with ample space and privacy.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => {
          const IconComponent = iconMap[amenity.icon as keyof typeof iconMap]

          return (
            <div key={index} className="flex items-center gap-3 py-2">
              {IconComponent && <IconComponent className="w-5 h-5 text-muted-foreground" />}
              <span className="text-foreground">{amenity.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
