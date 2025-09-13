import { useState, useEffect } from "react"
import axios from "axios"
import { PropertyCard } from "@/components/common/PropertyCard"
import { HeroSection } from "@/components/layout/Hero-Section";
import { PropertyCardProps } from "@/interfaces";
// import { properties } from "@/constants/index"

import { Loader } from "lucide-react"

export default function Home() {
  const [properties, setProperties] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState(true);


  function mapProperty(apiData: any) {
    return {
      id: apiData.zpid,
      image: apiData.imgSrc || "/assets/placeholder.svg",
      title: `${apiData.beds ?? "?"} Bed, ${apiData.baths ?? "?"} Bath`,
      city: apiData.addressCity || "Unknown City",
      amenities: [
        `${apiData.beds ?? "?"} Beds`,
        `${apiData.baths ?? "?"} Baths`,
        `${apiData.livingArea ?? "?"} sqft`,
      ],
      price: apiData.price ?? 0,
      originalPrice: apiData.zestimate,
      badges: [
        apiData.has3DModel ? "3D Tour" : null,
        apiData.hasVideo ? "Video" : null,
      ].filter(Boolean) as string[],
    }
  }

  useEffect(() => {

    const options = {
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
      params: {
        page: '1',
        region_id: '12447'
      },
      headers: {
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        'x-rapidapi-host': `${process.env.NEXT_PUBLIC_API_HOST}`
      }
    };

    const fetchProperties = async () => {
      try {
        const response = await axios.request(options);

        // I am storing the response in locaStorage for getting details.
        // I will implement a proper hook for state management later.
        if (typeof window !== "undefined") {
          localStorage.setItem("properties", JSON.stringify(response.data));
        }

        setProperties(response.data.map((item: any) => mapProperty(item)));

      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);



  if (loading) {
    return (
      <div className="flex justify-center">
        <Loader className="animate-spin w-12 h-12 text-blue-500" />
      </div>
    )
  }

  return (
    <>
      <HeroSection />

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
    </>
  );
}
