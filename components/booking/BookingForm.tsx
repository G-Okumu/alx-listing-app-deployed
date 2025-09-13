import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface BookingCardProps {
  price: number
}

export function BookingCard({ price }: BookingCardProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(1)

  const nights = 7
  const weeklyDiscount = -80
  const serviceFee = 33
  const total = price * nights + weeklyDiscount + serviceFee

  return (
    <Card className="sticky top-6">
      <CardContent className="p-6">
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-2xl font-bold">${price.toLocaleString()}</span>
          <span className="text-muted-foreground">/ night</span>
        </div>

        <div className="space-y-4 mb-6">
          {/* Check-in / Check-out */}
          <div className="grid grid-cols-2 border rounded-lg">
            <Popover>
              <PopoverTrigger asChild>
                <button className="p-3 text-left border-r hover:bg-gray-50 rounded-l-lg">
                  <div className="text-xs font-medium text-foreground">Check in</div>
                  <div className="text-sm text-muted-foreground">
                    {checkIn ? checkIn.toLocaleDateString() : "Add date"}
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <button className="p-3 text-left hover:bg-gray-50 rounded-r-lg">
                  <div className="text-xs font-medium text-foreground">Check out</div>
                  <div className="text-sm text-muted-foreground">
                    {checkOut ? checkOut.toLocaleDateString() : "Add date"}
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="border rounded-lg p-3">
            <div className="text-xs font-medium text-foreground mb-1">People</div>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full text-sm text-muted-foreground bg-transparent border-none outline-none"
            >
              {[...Array(14)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} guest{i > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-4">Reserve now</Button>

        {/* Pricing breakdown */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              ${price.toLocaleString()} x {nights} nights
            </span>
            <span className="text-foreground">${(price * nights).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Weekly discounts</span>
            <span className="text-green-600">${weeklyDiscount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service fee</span>
            <span className="text-foreground">${serviceFee}</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-semibold">
            <span className="text-foreground">Total payment</span>
            <span className="text-primary">${total.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
