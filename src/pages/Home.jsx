function Home() {
  return (
    <div className="relative">
      {/* Hero section with background image */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/homeimage.webp')" }}
      >
        {/* Content that goes on top of the hero image */}
        <div className="container mx-auto pt-24">
          <h1 className="text-4xl font-bold text-white">Welcome to La Cruisine Royal</h1>
          {/* Other hero content */}
        </div>
      </div>

      {/* Rest of the home page content */}
      <section className="py-12">{/* Other sections */}</section>
    </div>
  );
}

export default Home;
