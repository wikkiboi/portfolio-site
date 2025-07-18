import ContactForm from "../../modules/contact-form";

export default function ContactPage() {
  return (
    <main className="max-w-prose mx-auto px-4" id="contact">
      <h1 className="uppercase text-center text-5xl py-4 mb-8">Contact Me</h1>
      <ContactForm />
    </main>
  );
}
