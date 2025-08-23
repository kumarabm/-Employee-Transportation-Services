import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const InCarProvisionsSection = (): JSX.Element => {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  const formFields = [
    { id: "name", label: "Name", type: "input" },
    { id: "email", label: "Email", type: "input" },
    {
      id: "service",
      label: "What service are you interested in",
      type: "select",
      placeholder: "Select project type",
    },
    {
      id: "budget",
      label: "Budget",
      type: "select",
      placeholder: "Select project budget",
    },
    { id: "message", label: "Message", type: "textarea" },
  ];

  return (
    <section className="flex items-center justify-center gap-[174.47px] w-full">
      <div className="flex flex-col items-start gap-[69.79px]">
        <div className="flex flex-col items-start gap-[25.85px]">
          <h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-[82.7px] tracking-[0] leading-[normal]">
            Let&apos;s Talk
          </h1>
        </div>

        <div className="flex flex-col items-start gap-[25.85px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[41.4px] tracking-[0] leading-[normal]">
            Email
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-[20.7px] tracking-[0] leading-[normal]">
            bookings@entrex.in
          </p>
        </div>

        <div className="flex flex-col items-start gap-[25.85px]">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[41.4px] tracking-[0] leading-[normal]">
            Socials
          </h2>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="[font-family:'Poppins',Helvetica] font-normal text-black text-[20.7px] tracking-[0] leading-[normal] underline hover:no-underline transition-all"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        <div className="flex flex-col items-start gap-3 w-[728px]">
          <Label
            htmlFor="name"
            className="[font-family:'Poppins',Helvetica] font-normal text-black text-[18.1px] tracking-[0] leading-[normal]"
          >
            Name
          </Label>
          <Input
            id="name"
            className="w-full h-[50px] bg-[#f7f7f7] border-0 rounded-none"
          />
        </div>

        <div className="flex flex-col items-start gap-3 w-[728px]">
          <Label
            htmlFor="email"
            className="[font-family:'Poppins',Helvetica] font-normal text-black text-[18.1px] tracking-[0] leading-[normal]"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="w-full h-[50px] bg-[#f7f7f7] border-0 rounded-none"
          />
        </div>

        <div className="flex flex-col w-[727.63px] items-start gap-3">
          <Label className="[font-family:'Poppins',Helvetica] font-normal text-black text-[18.1px] tracking-[0] leading-[normal]">
            What service are you interested in
          </Label>
          <Select>
            <SelectTrigger className="h-[50px] px-[20.68px] py-[14.22px] bg-[#f7f7f7] border-0 rounded-none">
              <SelectValue
                placeholder="Select project type"
                className="[font-family:'Poppins',Helvetica] font-light text-[#b2b2b2] text-[18.1px] tracking-[0] leading-[normal]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="mobile-app">Mobile App</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-[727.63px] items-start gap-3">
          <Label className="[font-family:'Poppins',Helvetica] font-normal text-black text-[18.1px] tracking-[0] leading-[normal]">
            Budget
          </Label>
          <Select>
            <SelectTrigger className="h-[50px] px-[20.68px] py-[14.22px] bg-[#f7f7f7] border-0 rounded-none">
              <SelectValue
                placeholder="Select project budget"
                className="[font-family:'Poppins',Helvetica] font-light text-[#b2b2b2] text-[18.1px] tracking-[0] leading-[normal]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-5k">Under $5,000</SelectItem>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-plus">$25,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col items-start gap-3 w-[727.63px]">
          <Label
            htmlFor="message"
            className="[font-family:'Poppins',Helvetica] font-normal text-black text-[18.1px] tracking-[0] leading-[normal]"
          >
            Message
          </Label>
          <Textarea
            id="message"
            className="w-full h-[163.25px] bg-[#f7f7f7] border-0 rounded-none resize-none"
          />
        </div>

        <Button className="h-auto px-[317.93px] py-[16.8px] bg-black hover:bg-gray-800 rounded-none">
          <span className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-[25.8px] tracking-[0] leading-[normal]">
            Submit
          </span>
        </Button>
      </div>
    </section>
  );
};
