import { useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"

interface PropertyGalleryProps {
    images: {
        baseUrl: string
        photoData: { photoKey: string }[]
    }
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    const photoUrls = images.photoData.map((photo) =>
        images.baseUrl.replace("{photoKey}", photo.photoKey)
    )



    return (
        <div>
            {!showAllPhotos ? (
                <div className="grid grid-cols-3 gap-2">
                    {photoUrls.slice(0, 6).map((url, idx) => (
                        <Image
                            key={idx}
                            src={url}
                            alt={`Property photo ${idx + 1}`}
                            width={400}
                            height={32}
                            className="object-cover rounded"
                        />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-2">
                    {photoUrls.map((url, idx) => (
                        <Image
                            key={idx}
                            src={url}
                            alt={`Property photo ${idx + 1}`}
                            width={400}
                            height={32}
                            className="bject-cover rounded"
                        />
                    ))}
                </div>
            )}

            <Button
                className="mt-4 mx-auto block"
                onClick={() => setShowAllPhotos(!showAllPhotos)}
            >
                {showAllPhotos ? "Show Less" : "Show All"}
            </Button>
        </div>
    )
}
