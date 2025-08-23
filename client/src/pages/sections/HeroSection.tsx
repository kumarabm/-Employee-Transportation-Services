import React from "react";

export const HeroSection = (): JSX.Element => {
  const certificationLogos = [
    {
      src: "/figmaAssets/itta-logo1-1.png",
      alt: "Itta",
      className: "w-[275px] h-[183px] object-cover",
    },
    {
      src: "/figmaAssets/iato-1.png",
      alt: "Iato",
      className: "w-[275px] h-[183px] object-cover",
    },
  ];

  const affiliationInfo = [
    {
      title: "Affiliations: IATO – Indian Association of Tour Operators",
      description:
        "We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.",
    },
    {
      title: "Affiliations: IATO – Indian Association of Tour Operators",
      description:
        "We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.",
    },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Main Certifications Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16">
          <div className="flex flex-col items-center">
            <img
              className="w-[200px] lg:w-[275px] h-[130px] lg:h-[183px] object-cover"
              alt={certificationLogos[0].alt}
              src={certificationLogos[0].src}
            />
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-[300px] lg:w-[500px] xl:w-[600px] h-[300px] lg:h-[400px] xl:h-[500px] bg-[url(/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png)] bg-cover bg-center flex items-center justify-center">
              <h1 className="font-bold text-black text-2xl lg:text-4xl xl:text-[56px] text-center tracking-[0] leading-tight">
                Our
                <br />
                Certifications
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-[200px] lg:w-[275px] h-[130px] lg:h-[183px] object-cover"
              alt={certificationLogos[1].alt}
              src={certificationLogos[1].src}
            />
          </div>
        </div>

        {/* Affiliation Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1000px] mx-auto">
          {affiliationInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 text-center lg:text-left"
            >
              <h2 className="font-bold text-gray-900 text-lg lg:text-2xl leading-tight tracking-[0]">
                {info.title}
              </h2>
              <p className="font-normal text-neutral-900 text-sm lg:text-base leading-6 tracking-[0]">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
