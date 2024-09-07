"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Menu } from "lucide-react";
import { SiGithub, SiX, SiLinkedin } from "@icons-pack/react-simple-icons";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted");
    setIsModalOpen(false);
  };

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
              <DialogContent className="sm:max-w-[425px] bg-zinc-800 text-white">
                <DialogHeader>
                  <DialogTitle>Send me a message</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      className="bg-zinc-700 text-white border-zinc-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-zinc-700 text-white border-zinc-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      className="bg-zinc-700 text-white border-zinc-600"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                  >
                    Send Message
                  </Button>
                </form>
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

        <footer className="bg-orange-500 p-4 mt-8">
          <div className="text-sm md:text-base">
            <p className="font-bold">Head of Engineering @ Toggl</p>
            <p className="font-bold">Co-Founder & CTO @ Chipcolate</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
