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

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email("Invalid email"),
  subject: z.string().max(100, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // recaptchaToken: z.string().min(1, "Please complete the reCAPTCHA"),
});

type FormSchema = z.infer<typeof schema>;

export default function ContactForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    const { name, email, subject, message } = values;
    if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        toast.success("Message successfully sent!");
        form.reset();
        form.clearErrors();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 mx-auto"
      >
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
        <div className="flex">
          <Button type="submit" size="lg" className="flex ml-auto bg-blue-400">
            <Send />
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
