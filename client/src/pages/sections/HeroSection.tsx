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
    <section className="relative w-full">
      <div className="relative h-[646px]">
        <div className="flex items-center gap-[58px] absolute top-0 left-[3px]">
          <img
            className={certificationLogos[0].className}
            alt={certificationLogos[0].alt}
            src={certificationLogos[0].src}
          />

          <div className="relative w-[790px] h-[646px]">
            <div className="relative w-[788px] h-[646px] bg-[url(/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png)] bg-cover bg-[50%_50%]">
              <h1 className="absolute top-[264px] left-[206px] [font-family:'Inter',Helvetica] font-bold text-black text-[56px] text-center tracking-[0] leading-[59.4px]">
                Our
                <br />
                Certifications
              </h1>
            </div>
          </div>

          <img
            className={certificationLogos[1].className}
            alt={certificationLogos[1].alt}
            src={certificationLogos[1].src}
          />
        </div>

        {affiliationInfo.map((info, index) => (
          <div
            key={index}
            className={`flex flex-col items-start gap-3 absolute top-[447px] ${index === 0 ? "left-0" : "left-[1180px]"}`}
          >
            <div className="flex items-end justify-end gap-0.5 flex-[0_0_auto]">
              <h2 className="w-[353px] mt-[-1.00px] font-bold text-gray-900 text-2xl leading-[26px] [font-family:'Inter',Helvetica] tracking-[0]">
                {info.title}
              </h2>
            </div>

            <p className="w-[324px] font-normal text-neutral-900 text-base leading-6 [font-family:'Inter',Helvetica] tracking-[0]">
              {info.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
