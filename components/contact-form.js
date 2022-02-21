import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/contact-form.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);


  if (state.succeeded) {
    setTimeout(function(){
        self.close();
    },2000);
    return <h3 className="primary-color">Thanks! ʕ•ᴥ•ʔﾉ♡</h3>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.element}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input className={styles.emailInput} id="email" type="email" name="email" required="reuired" autocomplete="off"/>
            <ValidationError className={styles.errors} prefix="Email" field="email" errors={state.errors} />
        </div>
            
        <div className={styles.element}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea className={styles.messageTextarea} id="message" name="message" required="reuired"/>
            <ValidationError className={styles.errors} prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className={styles.element}>
            <button className={styles.button} type="submit" disabled={state.submitting}>
                Submit
            </button>
            <ValidationError className={styles.errors} errors={state.errors} />
        </div>      
    </form>
  );
}