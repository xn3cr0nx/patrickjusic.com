import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

const RoleAccordion: React.FC<{
  value: string;
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  content: React.ReactNode;
}> = (props) => (
  <AccordionItem value={props.value} className="border-orange-50 mt-2">
    <AccordionTrigger className="bg-orange-500 text-white p-4 rounded-t-lg hover:bg-orange-600 hover:no-underline">
      <div className="flex flex-col md:flex-row justify-between items-start w-full md:pr-8">
        <div className="flex whitespace-nowrap text-sm lg:text-base">
          {`${props.title} @`}
          <Link
            href={props.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 font-bold ml-1"
          >
            {props.company}
          </Link>
        </div>
        <p className="italic">{props.period}</p>
      </div>
    </AccordionTrigger>
    <AccordionContent className="bg-zinc-800 p-4 rounded-b-lg">
      <p>{props.content}</p>
    </AccordionContent>
  </AccordionItem>
);

export default RoleAccordion;
