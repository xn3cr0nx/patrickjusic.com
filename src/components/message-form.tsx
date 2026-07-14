import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, LoaderIcon } from "lucide-react";
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
  /** Optional callback fired after a message is sent successfully. */
  onSuccess?: () => void;
}

// Shared token-driven field styling so inputs read on the dark surface.
const fieldClass =
  "w-full bg-[var(--bg-2)] border-[var(--line)] text-text placeholder:text-muted focus-visible:ring-[var(--green)] focus-visible:ring-offset-0";

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
  const [isSent, setIsSent] = useState(false);

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

      form.reset();
      setIsSent(true);
      onSuccess?.();
      toast({
        title: "Message received",
        description: "Thanks! I will reply within 24 hours.",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description:
          "Please retry in a moment, or reach me directly on X or LinkedIn.",
      });
    } finally {
      setIsSending(false);
    }
  };

  if (isSent) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-[var(--radius)] border border-[rgba(52,196,99,.25)] bg-[rgba(52,196,99,.06)] p-6"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(52,196,99,.12)] text-green-bright">
          <CheckIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="space-y-1">
          <p className="text-lg font-medium text-text">Message sent.</p>
          <p className="text-sm text-muted">
            Thanks for reaching out — I&rsquo;ll reply within 24 hours.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-1 border-[var(--line)] bg-transparent text-text hover:bg-[var(--bg-2)] hover:text-green-bright"
          onClick={() => setIsSent(false)}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-5"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-text">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    autoComplete="name"
                    className={fieldClass}
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
                <FormLabel className="text-sm font-medium text-text">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@company.com"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-text">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What are you building, and how can I help?"
                  rows={6}
                  className={`${fieldClass} min-h-[140px] resize-y`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSending}
          className="w-full font-medium sm:w-auto sm:min-w-[180px]"
        >
          {isSending ? (
            <>
              <LoaderIcon className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </form>
    </Form>
  );
}
