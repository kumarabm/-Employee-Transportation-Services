import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[71px] relative">
      <div className="inline-flex flex-col items-center gap-7 relative flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-4 self-stretch w-full relative flex-[0_0_auto]">
          <h2 className="relative max-w-[1163px] [font-family:'Inter',Helvetica] font-bold text-black text-[56px] text-center tracking-[0] leading-[59.4px]">
            Trusted by 1500+ popular companies
          </h2>

          <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-[17.0px] whitespace-nowrap">
            Every ENTREX ride comes with thoughtful in-car provisions to ensure
            your comfort, safety, and satisfaction.
          </p>
        </div>
      </div>

      <img
        className="relative w-full max-w-[1340px] h-auto"
        alt="Logos"
        src="/figmaAssets/logos.png"
      />
    </section>
  );
};
