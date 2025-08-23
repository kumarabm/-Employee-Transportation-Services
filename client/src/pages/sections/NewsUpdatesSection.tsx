import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const NewsUpdatesSection = (): JSX.Element => {
  const formFields = [
    { placeholder: "Full Name", type: "input" },
    { placeholder: "Phone Number", type: "input" },
  ];

  const selectFields = [
    { placeholder: "Select Date", options: [] },
    { placeholder: "Select Time", options: [] },
    { placeholder: "Adults", options: [] },
    { placeholder: "Children", options: [] },
  ];

  return (
    <section className="w-full bg-[url(/figmaAssets/container.svg)] bg-[100%_100%] relative">
      <div className="flex flex-col w-full max-w-[481px] items-center gap-6 py-[38px] px-[30px] mx-auto">
        <header className="inline-flex items-end gap-6 relative flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#ffffff] text-[32px] tracking-[0] leading-[33.9px] whitespace-nowrap">
            Book Your Ride Instantly
          </h1>
        </header>

        <form className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            {formFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2.5 relative flex-1 grow"
              >
                <Input
                  placeholder={field.placeholder}
                  className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff0d] rounded-[5px] border border-solid border-[#eef3ff66] [font-family:'Inter',Helvetica] font-medium text-[#ffffffcc] text-[17.7px] tracking-[0.27px] leading-[26.5px] placeholder:text-[#ffffffcc]"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Input
              placeholder="Email Address"
              type="email"
              className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff0d] rounded-[5px] border border-solid border-[#eef3ff66] [font-family:'Inter',Helvetica] font-medium text-[#ffffffcc] text-[17.7px] tracking-[0.27px] leading-[26.5px] placeholder:text-[#ffffffcc]"
            />
          </div>

          <div className="flex flex-wrap items-start gap-[16px_16px] relative self-stretch w-full flex-[0_0_auto]">
            {selectFields.slice(0, 2).map((field, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2.5 relative flex-1 grow"
              >
                <Select>
                  <SelectTrigger className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff0d] rounded-[5px] border border-solid border-[#eef3ff66] [font-family:'Inter',Helvetica] font-medium text-[#ffffffcc] text-[17.7px] tracking-[0.27px] leading-[26.5px]">
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="placeholder">
                      Select an option
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-start gap-[16px_16px] relative self-stretch w-full flex-[0_0_auto]">
            {selectFields.slice(2, 4).map((field, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2.5 relative flex-1 grow"
              >
                <Select>
                  <SelectTrigger className="flex items-center gap-2.5 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8ff0d] rounded-[5px] border border-solid border-[#eef3ff66] [font-family:'Inter',Helvetica] font-medium text-[#ffffffcc] text-[17.7px] tracking-[0.27px] leading-[26.5px]">
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="placeholder">
                      Select an option
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Textarea
              placeholder="Message"
              className="flex h-[86px] items-center gap-2.5 p-3 relative self-stretch w-full bg-[#f6f8ff0d] rounded-[5px] border border-solid border-[#eef3ff66] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-[17.7px] tracking-[0.27px] leading-[26.5px] placeholder:text-[#ffffff] placeholder:opacity-40 resize-none"
            />
          </div>

          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <Button
              variant="outline"
              className="flex w-[174px] h-[50px] items-center justify-center gap-2.5 px-[30px] py-2.5 relative rounded-[181px] border border-solid border-[#ffffff] bg-transparent hover:bg-[#ffffff] hover:text-black [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-base text-center tracking-[0] leading-[20.0px] whitespace-nowrap h-auto"
            >
              RESET
            </Button>

            <Button className="flex w-[284px] h-[50px] items-center justify-center gap-2.5 px-[30px] py-2.5 relative bg-[#ffffff] rounded-[181px] hover:bg-[#f0f0f0] [font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-[20.0px] whitespace-nowrap h-auto">
              LET&apos;S BOOK NOW
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
