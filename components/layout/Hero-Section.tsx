export function HeroSection() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-black/50 to-black/30 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/mountain-lake-landscape-with-wooden-cabin.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl text-white/90">The best prices for over 2 million properties worldwide</p>
        </div>
      </div>
    </div>
  )
}
