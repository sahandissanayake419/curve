import BusinessPricingCards from "./business-pricing-cards";

function ForBusinesses() {
  return (
    <div className=" border-black py-8 xl:py-32">
      <div className="px-12 xl:px-72">
        <div className="mt-4">
          <h1 className="text-xl text-curve-blue-2 xl:text-4xl">For Businesess</h1>
          <h1 className="mt-4 text-3xl text-curve-grey-2 xl:text-6xl">Thinking of giving your business a makeover?</h1>
        </div>
        <h1 className="mt-4 text-lg text-curve-grey-4 xl:mt-32 xl:text-4xl">
          Want to launch a new digital product? or ready to create a website for your business?
        </h1>
      </div>
      <BusinessPricingCards />
    </div>
  );
}

export default ForBusinesses;
