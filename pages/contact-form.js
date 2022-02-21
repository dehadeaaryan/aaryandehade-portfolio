import ContactForm from "../components/contact-form";
import styles from "../styles/contact-form.module.css";

export default function Contact() {
    return (
        <div className={styles.container}>
            <ContactForm />
        </div>
    )
}