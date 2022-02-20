import styles from '../styles/project.module.css'

export default function Project(props) {
    return (
        <>
            {props.name}
            <br />
            {props.link}
        </>
    )
}