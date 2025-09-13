import {PropertyCard} from "@/components/common/PropertyCard"
import { properties } from "@/constants/index"

export default function Home() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Show more
          </button>
          <p className="text-sm text-muted-foreground mt-2">Click to see more listings</p>
        </div>
      </div>
    </div>
  );
}
