"use client";

import experiences from "@/components/experiences";
import { MessageForm } from "@/components/message-form";
import RoleAccordion from "@/components/role-accordion";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col h-full">
        <header className="py-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center border-b border-zinc-700">
          <h1 className="text-xl font-bold">
            Patrick Jusic <span className="text-orange-500">| xn3cr0nx</span>
          </h1>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link
              href="https://x.com/xn3cr0nx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiX className="w-5 h-5 hover:text-orange-500" />
            </Link>
            <Link
              href="https://github.com/xn3cr0nx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="w-5 h-5 hover:text-orange-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/patrickjusic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="w-5 h-5 hover:text-orange-500" />
            </Link>
          </div>
        </header>

        <main className="flex-grow pt-8 lg:py-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 space-y-8">
            <ul className="space-y-2 text-xl lg:text-3xl font-bold">
              <li>Geek</li>
              <li>Father</li>
              <li>Founder</li>
              <li>Engineer</li>
              <li>Bitcoiner</li>
              <li>Libertarian</li>
              <li>Cypherpunk</li>
              <li>Accelerationist</li>
            </ul>

            <div className="w-full -ml-4 md:hidden">
              <Image
                src="/traced-portrait-bw.png"
                alt="Patrick Jusic"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg drop-shadow-[1rem_1rem_1rem_#000]"
              />
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base w-full sm:w-64 h-12">
                  Want to get in touch?
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] md:max-w-[500px] bg-zinc-800 text-white rounded-lg">
                <DialogHeader>
                  <DialogTitle>Send me a message</DialogTitle>
                </DialogHeader>
                <MessageForm onSuccess={() => setIsModalOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="lg:w-1/2 mr-0 hidden md:block">
            <Image
              src="/traced-portrait-bw.png"
              alt="Patrick Jusic"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg drop-shadow-[1rem_1rem_1rem_#000]"
            />
          </div>
        </main>

        <section className="mt-8">
          <p className="text-xl lg:text-3xl font-bold">Background</p>
          <Accordion type="single" collapsible className="w-full mt-4">
            {experiences.map((experience, index) => (
              <RoleAccordion
                key={experience.company}
                value={`item-${index + 1}`}
                title={experience.title}
                company={experience.company}
                companyUrl={experience.companyUrl}
                period={experience.period}
                content={experience.content}
              />
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
