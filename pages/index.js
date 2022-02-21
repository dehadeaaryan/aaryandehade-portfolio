import styles from '../styles/index.module.css'

const title = "Student"
const text = "Explore this website to know more about me."
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at vulputate ante. Nulla vitae arcu in lorem gravida congue quis ac lorem. Ut ac risus arcu. Donec porta lectus leo, a scelerisque sapien pellentesque quis. Proin lacinia, dolor nec cursus mattis, nulla ipsum aliquam purus, sed pretium massa tellus eget diam. Nunc in sem dictum, rhoncus tellus id, tempus libero. Nullam egestas, lacus sit amet lobortis cursus, nibh leo scelerisque lorem, laoreet mattis sem orci nec magna. Cras laoreet, tortor eget mollis mattis, massa urna varius leo, ac consequat quam odio tincidunt eros. Aliquam sed varius lectus. Fusce dictum ultrices dui convallis elementum."

export default function Index() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {title}
                </h1>
                <p className={styles.paragraph}>
                    {text}
                </p>
            </main>
        </div>
    )
}