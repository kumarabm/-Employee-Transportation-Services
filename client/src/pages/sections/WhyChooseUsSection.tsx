import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 lg:gap-[71px] relative py-8 lg:py-16 px-4">
      <div className="inline-flex flex-col items-center gap-4 lg:gap-7 relative flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-4 self-stretch w-full relative flex-[0_0_auto]">
          <h2 className="relative max-w-[1163px] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-center tracking-[0] leading-tight lg:leading-[59.4px]">
            Trusted by 1500+ popular companies
          </h2>

          <p className="relative w-fit font-medium text-black text-sm sm:text-base text-center tracking-[0] leading-relaxed">
            Every ENTREX ride comes with thoughtful in-car provisions to ensure
            your comfort, safety, and satisfaction.
          </p>
        </div>
      </div>

      <img
        className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1340px] h-auto"
        alt="Logos"
        src="/figmaAssets/logos.png"
      />
    </section>
  );
};
