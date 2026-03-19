import { useState } from "react";
import { MessageForm } from "@/components/message-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ContactDialog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
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
  );
}
