import ContactForm from "../../components/contact/contact-form";
import styles from "../../styles/contact-form.module.css";
import Layout from "../../components/old/layout";

export default function Contact() {
    return (
        <Layout>
        <div className={styles.container}>
            <ContactForm />
        </div>
        </Layout>
    )
}