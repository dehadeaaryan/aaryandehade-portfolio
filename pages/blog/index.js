import Link from 'next/link'
import { getSortedPostsData } from '../../lib/blogPosts'
import Date from '../../components/date'
import styles from '../../styles/blog.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
    return (
        <div className={styles.container}>
        <h1 className={styles.h1}>Blog</h1>
        <section className={styles.section}>
          <ul className={styles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/blog/${id}`} key={id}><a>
              <li className={styles.item} key={id}>
                <a className={styles.a}>{title}</a>
                <br />
                <small className={styles.small}>
                  <Date dateString={date} />
                </small>
            </li>
            </a>
            </Link>

            ))}
          </ul>
        </section>
        </div>
    )
  }