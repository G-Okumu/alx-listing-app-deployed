interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}


export interface PropertyCardProps {
  id: number,
  image: string
  title: string
  location: string
  rating: number
  price: number
  originalPrice?: number
  badges?: string[]
  amenities: string[]
}

export interface PropertyProps {
    id: number,
    name:string,
    address: {
        state:string,
        city:string,
        country:string
    },
    rating: number,
    category: string[],
    price: number,
    offers: {
        bed:string,
        shower:string,
        occupants:string
    },
    description: string,
    image:string,
    discount:string,
    reviews: any[]
}

export interface BookingDetailsProps {
    propertyId: number;
    propertyName: string;
    startDate: string;
    endDate: string;
    totalNights: number;
    price: number;
    bookingFee: number;
}

export interface PropertyDetailApiaData {
  zpid: number;
  contentType: string;
  location: string;
  host: string;
  price: number;
  reviewCount: number;
  carouselPhotosComposable: {
    baseUrl: string;
    photoData: { photoKey: string }[];
  };
}

export interface ApiProperty {
  zpid: number;
  imgSrc?: string;
  beds?: number;
  baths?: number;
  addressCity?: string;
  livingArea?: number;
  price?: number;
  zestimate?: number;
  has3DModel?: boolean;
  hasVideo?: boolean;
}