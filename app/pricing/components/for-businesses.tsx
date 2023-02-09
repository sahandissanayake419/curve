import PricingCard from "./pricing-card";

function ForBusinesses() {
  return (
    <div className="py-8 border border-black">
      <div className="mt-4">
        <h1 className="text-xl">For Businesess</h1>
        <h1 className="text-3xl">Thinking of giving your business a makeover?</h1>
      </div>
      <h1 className="mt-16 text-lg">
        Want to launch a new digital product? or ready to create a website for your business?
      </h1>
      <div className="flex overflow-x-scroll gap-x-4 mt-4">
        {/* Cards */}
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}

export default ForBusinesses;

