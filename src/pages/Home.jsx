function Home() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/resss.webp')" }}>
      {/* You can add content for the hero section here */}
      <div className="container mx-auto flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4">
          <span className="font-primary2 mb-2 block text-3xl font-light uppercase tracking-wider">
            Welcome to
          </span>
          <span className="font-primary block text-7xl font-bold">
            <span className="text-yellow-300">La</span> Cruisine Royal
          </span>
        </h1>
        <p className="mb-2 text-2xl">A Modern Restaurant & Lounge.</p>
        <p className="text-xl font-light italic">
          Bringing Elegant, Natural, Sensuous And Free Spirit to Lagos
        </p>
      </div>
    </div>
  );
}

export default Home;
