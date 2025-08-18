import ContactForm from "../../modules/contact-form";

export default function ContactPage() {
  return (
    <main className="max-w-prose mx-auto px-4" id="contact">
      <h1 className="text-center text-5xl mb-2 pt-3">Contact Me</h1>
      <h2 className="text-center text-muted-foreground mb-8">
        Let&apos;s talk some more
      </h2>
      <ContactForm />
      <div className="text-center text-xs text-muted-foreground">
        Powered by{" "}
        <a href="https://resend.com" className="underline">
          Resend
        </a>
      </div>
    </main>
  );
}
