import ContactForm from "../../modules/contact-form";

export default function ContactPage() {
  return (
    <main className="max-w-prose mx-auto px-4" id="contact">
      <h1 className="text-center text-5xl py-3 mb-8">Contact Me</h1>
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
