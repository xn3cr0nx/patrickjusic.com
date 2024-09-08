import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Schema = z.object({
  name: z.string().min(2, {
    message: "Name should contain at least 2 characters",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message should contain at least 10 characters",
    })
    .max(500, {
      message: "Message should not contain more than 500 characters",
    }),
});

export interface MessageFormProps {
  onSuccess: () => void;
}

export function MessageForm({ onSuccess }: MessageFormProps) {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: z.infer<typeof Schema>) => {
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      onSuccess();
      toast({
        // variant: "success",
        title: "Message received",
        description: "Thanks! I will reply within 24 hours",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description:
          "Please retry later, or send me an email at patrick.jusic@protonmail.com",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Name"
                  className="w-full bg-zinc-700 text-white border-zinc-600"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  className="w-full bg-zinc-700 text-white border-zinc-600"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  required
                  className="w-full bg-zinc-700 text-white border-zinc-600"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isSending ? (
          <LoaderIcon className="animate-spin text-orange-500" />
        ) : (
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white w-full"
          >
            Send Message
          </Button>
        )}
      </form>
    </Form>
  );
}
