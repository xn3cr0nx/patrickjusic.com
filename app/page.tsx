"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { Menu } from "lucide-react";
import { MessageForm } from "@/components/message-form";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col h-full">
        <header className="py-4 flex flex-wrap justify-between items-center border-b border-zinc-700">
          <h1 className="text-xl font-bold">
            Patrick Jusic <span className="text-orange-500">| xn3cr0nx</span>
          </h1>
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <nav
            className={`w-full lg:w-auto ${
              isMenuOpen ? "block" : "hidden"
            } lg:block mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Beliefs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav> */}
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

        <main className="flex-grow py-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 space-y-8">
            <ul className="space-y-2 text-xl md:text-3xl font-bold">
              <li>Geek</li>
              <li>Father</li>
              <li>Founder</li>
              <li>Engineer</li>
              <li>Bitcoiner</li>
              <li>Libertarian</li>
              <li>Cypherpunk</li>
              <li>Accelerationist</li>
            </ul>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-64">
                  Want to get in touch?
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-zinc-800 text-white">
                <DialogHeader>
                  <DialogTitle>Send me a message</DialogTitle>
                </DialogHeader>
                <MessageForm onSuccess={() => setIsModalOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/portrait-bw-sat.jpeg"
              alt="Patrick Jusic"
              width={600}
              height={600}
              className="w-full h-64 md:h-96 lg:h-auto object-cover rounded-lg"
            />
          </div>
        </main>

        <Accordion type="single" collapsible className="w-full mt-8">
          <AccordionItem value="item-1" className="border-orange-500">
            <AccordionTrigger className="bg-orange-500 text-white p-4 rounded-t-lg hover:bg-orange-600 hover:no-underline">
              Head of Engineering @{" "}
              <Link
                href="http://toggl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900"
              >
                Toggl
              </Link>
            </AccordionTrigger>
            <AccordionContent className="bg-zinc-800 p-4 rounded-b-lg">
              <p>
                Leading the engineering team at Toggl, focusing on time tracking
                and productivity tools. Responsible for technical strategy, team
                growth, and product development.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-orange-500 mt-2">
            <AccordionTrigger className="bg-orange-500 text-white p-4 rounded-t-lg hover:bg-orange-600 hover:no-underline">
              Co-Founder & CTO @{" "}
              <Link
                href="http://chipcolate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900"
              >
                Chipcolate
              </Link>
            </AccordionTrigger>
            <AccordionContent className="bg-zinc-800 p-4 rounded-b-lg">
              <p>
                Co-founded Chipcolate, a startup focused on embedded systems and
                3D printing.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
