"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    toast.success("Message successfully sent!");

    form.reset();
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
              <FormControl>
                <Input placeholder="Your Email" {...field} />
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

/*
    <form className="flex flex-col gap-6" method="POST" action="/api/contact">
      <input
        {...register("name")}
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="p-3 border rounded-md shadow-sm"
      />
      <input
        {...register("email")}
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="p-3 border rounded-md shadow-sm"
      />
      <textarea
        name="message"
        required
        placeholder="Your Message"
        rows={5}
        className="p-3 border rounded-md shadow-sm"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
*/
