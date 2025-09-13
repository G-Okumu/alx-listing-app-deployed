import { PropertyAmenities } from "@/components/common/PropertyAmenities";
import { PropertyDetails } from "@/components/property/PropertyDetail";
import { PropertyGallery } from "@/components/common/PropertyGallery";
import { PropertyReviews } from "@/components/common/PropertyReviews";
import { BookingCard } from "@/components/booking/BookingForm";
import { useParams } from "next/navigation";
import { PropertyDetailApiaData } from "@/interfaces";

// Mock data for the property
const missingPropertyData = {
  id: "1",
  title: "Villa Arrecife Beach House",
  location: "Samaná, Bali, Indonesia",
  rating: 4.76,
  reviewCount: 345,
  host: "Mainstream",
  bedrooms: 5,
  bathrooms: 3,
  guests: 14,
  price: 2500,
  images: [
    "/assets/villa-arrecife-main.jpg",
    "/assets/villa-arrecife-dock.jpg",
    "/assets/villa-arrecife-aerial.jpg",
    "/assets/villa-arrecife-pool.jpg",
  ],
  description: `Feel like exploring the Dominican? Start the day with a hike on one of Playa Morón's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you're Feel like exploring the Dominican? Start the day with a hike on one of Playa Morón's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you're ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.`,
  amenities: [
    { icon: "Mountain", name: "Mountain view" },
    { icon: "Waves", name: "Shared beach access" },
    { icon: "ChefHat", name: "Chef" },
    { icon: "User", name: "Butler" },
    { icon: "Sparkles", name: "Cleaning available during stay" },
    { icon: "Wine", name: "Bartender" },
    { icon: "Waves", name: "Pool - infinity" },
    { icon: "Thermometer", name: "Hot tub" },
    { icon: "ChefHat", name: "Kitchen" },
    { icon: "Wifi", name: "Wifi" },
  ],
}

export default function PropertyDetailPage() {
  let data;

  if (typeof window !== "undefined") {
    data = JSON.parse(localStorage.getItem("properties") || "{}");
  }

  const param = useParams();


  if (!data || data.length === 0) {
    return <div className="text-center text-red-500">No property data found.</div>;
  }

  const propertyData = data.find((item: PropertyDetailApiaData) => item.zpid.toString() === param.id);


  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Property Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">{propertyData.contentType}</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-foreground hover:text-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Save
            </button>
            <button className="flex items-center gap-2 text-foreground hover:text-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-medium text-foreground">{missingPropertyData.rating}</span>
            <span>({propertyData.reviewCount} reviews)</span>
          </div>
          <span>•</span>
          <span>{propertyData.location}</span>
          <span>•</span>
          <span>{propertyData.host}</span>
        </div>
      </div>

      {/* Property Gallery */}
      <PropertyGallery images={propertyData.carouselPhotosComposable} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <PropertyDetails property={propertyData} />
          <PropertyAmenities amenities={missingPropertyData.amenities} />
          <PropertyReviews rating={missingPropertyData.rating} reviewCount={missingPropertyData.reviewCount} />
        </div>

        <div className="lg:col-span-1">
          <BookingCard price={propertyData.price} />
        </div>
      </div>
    </main>

  )
}
