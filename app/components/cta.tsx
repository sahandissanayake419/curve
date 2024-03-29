import Link from "next/link";

function CTA() {
  return (
    <div className="border-black py-10    xl:py-64">
      <h1 className="text-center text-2xl lg:text-left xl:text-5xl">
        Interested in getting the pricing info or want check our services?
        <br />
        <span className="block text-curve-blue-1 xl:mt-4">Just click away</span>
      </h1>
      <div className="gap mt-8 flex flex-col items-center lg:flex-row lg:justify-start lg:gap-4 xl:mt-16 xl:justify-end xl:gap-8">
        <Link href={"/pricing"} className="button-border-1 rounded-2xl px-4  py-2 text-xl xl:text-4xl">
          Pricing
        </Link>
        <button
          type="button"
          className="text-bg-3 button-border-1 mt-4 rounded-2xl px-4 py-2 text-xl lg:mt-0 xl:text-4xl"
        >
          Drop a message
        </button>
      </div>
    </div>
  );
}

export default CTA;
