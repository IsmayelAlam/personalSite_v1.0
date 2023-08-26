import style from "../styles/Contact.module.css";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import ContactLinks from "@/components/ContactLinks";

export default function Contact() {
  return (
    <section className={style.contact} id="contact">
      <Map />

      <ContactForm />

      <div className={style.social}>
        <ContactLinks />
      </div>
    </section>
  );
}
