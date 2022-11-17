import styles from '../../styles/new/index.module.css'

export default function Resume(props) {
    if(!props.show){
        return null;
    }
    return (
        <div className={styles.modal}>
            <embed className={styles.embed} src='Resume.pdf' type='application/pdf' />
            <button>Close</button>
        </div>
    )
}