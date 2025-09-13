import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Users } from "lucide-react"

export function Header() {
  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="flex items-center justify-center gap-2">
          ✈️ Overseas trip? Get the latest information on travel guides
          <Button variant="secondary" size="sm" className="ml-2 h-6 px-2 text-xs">
            More info
          </Button>
        </span>
      </div>

      {/* Main header */}
      <header className="border-b bg-background px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">alx</div>

            {/* Search bar */}
            <div className="hidden md:flex items-center bg-card border rounded-full px-4 py-2 shadow-sm max-w-md flex-1 mx-8">
              <div className="flex items-center gap-2 flex-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Location" className="border-0 bg-transparent p-0 focus-visible:ring-0" />
              </div>
              <div className="border-l pl-4 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Check in</span>
              </div>
              <div className="border-l pl-4 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Check out</span>
              </div>
              <div className="border-l pl-4 flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">People</span>
              </div>
              <Button size="sm" className="ml-4 rounded-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Auth buttons */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Sign in
              </Button>
              <Button size="sm">Sign up</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
