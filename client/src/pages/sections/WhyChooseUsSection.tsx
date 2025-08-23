import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 lg:gap-[71px] relative py-16 lg:py-24 px-4 bg-white">
      <div className="inline-flex flex-col items-center gap-4 lg:gap-7 relative flex-[0_0_auto] max-w-[1200px]">
        <div className="flex flex-col items-center gap-4 self-stretch w-full relative flex-[0_0_auto]">
          <h2 className="relative max-w-[1163px] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-center tracking-[0] leading-tight lg:leading-[59.4px]">
            Trusted by 1500+ popular companies
          </h2>

          <p className="relative w-fit font-medium text-black text-sm sm:text-base text-center tracking-[0] leading-relaxed max-w-[600px]">
            Premium chauffeur services trusted by leading corporations and businesses across India.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1340px] h-auto"
          alt="Logos"
          src="/figmaAssets/logos.png"
        />
      </div>
    </section>
  );
};
