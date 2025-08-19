"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email("Invalid email"),
  subject: z.string().max(100, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  turnstileToken: z.string().min(1, "Please fill out the captcha"),
});

type FormSchema = z.infer<typeof schema>;

export default function ContactForm() {
  const [turnstileStatus, setTurnstileStatus] = useState("required");
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      turnstileToken: "",
    },
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    const { name, email, subject, message, turnstileToken } = values;
    if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    if (!turnstileToken) {
      toast.error("Please fill out the captcha");
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, turnstileToken }),
      });

      if (response.ok) {
        toast.success("Message successfully sent!");
        form.reset();
        turnstileRef.current?.reset();
        setTurnstileStatus("required");
        form.clearErrors();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mx-auto mb-8">
        <div className="space-y-6 mb-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-1 text-xs">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
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
                <FormLabel className="ml-1 text-xs">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-1 text-xs gap-1">
                  Subject<span className="m-0 text-gray-400">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
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
                <FormLabel className="ml-1 text-xs">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message..."
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Turnstile
          ref={turnstileRef}
          siteKey={siteKey}
          onError={() => {
            form.setValue("turnstileToken", "");
            setTurnstileStatus("error");
            toast.error("Security check failed. Please try again.");
          }}
          onExpire={() => {
            form.setValue("turnstileToken", "");
            setTurnstileStatus("expired");
            toast.error("Security check failed. Please try again.");
          }}
          onWidgetLoad={() => {
            setTurnstileStatus("required");
          }}
          onSuccess={(token) => {
            form.setValue("turnstileToken", token);
            setTurnstileStatus("success");
          }}
        />

        <div className="flex justify-between items-end">
          <a href="mailto:wikki.rho@gmail.com" className="text-zinc-500">
            Or email me at:{" "}
            <span className="underline text-blue-400 hover:text-blue-500">
              wikki.rho@gmail.com
            </span>
          </a>
          <Button
            type="submit"
            size="lg"
            className="flex ml-auto bg-blue-400 hover:bg-blue-500"
            disabled={turnstileStatus !== "success"}
          >
            <Send />
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
