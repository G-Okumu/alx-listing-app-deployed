import {
  Home,
  Building2,
  TreePine,
  Car,
  Mountain,
  Waves,
  MapPin,
  Tent,
  Building,
  Mouse as House,
  Warehouse,
  Ban as Barn,
  Castle,
  Hotel,
} from "lucide-react"

const propertyTypes = [
  { icon: Home, label: "Homes" },
  { icon: Building2, label: "Mansions" },
  { icon: TreePine, label: "Countryside" },
  { icon: Car, label: "Villas" },
  { icon: Mountain, label: "Tropical" },
  { icon: Waves, label: "New" },
  { icon: MapPin, label: "Amazing pool" },
  { icon: Tent, label: "Beach house" },
  { icon: Building, label: "Island" },
  { icon: House, label: "Camping" },
  { icon: Warehouse, label: "Apartment" },
  { icon: Barn, label: "House" },
  { icon: Castle, label: "Lakefront" },
  { icon: Hotel, label: "Farm house" },
  { icon: Building2, label: "Treehouse" },
  { icon: Castle, label: "Castles" },
]

export function PropertyTypes() {
  return (
    <div className="border-b bg-background px-4 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-fit cursor-pointer hover:text-primary transition-colors"
            >
              <type.icon className="h-6 w-6" />
              <span className="text-xs text-center whitespace-nowrap">{type.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
