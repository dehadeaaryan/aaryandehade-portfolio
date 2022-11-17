import Link from 'next/link'
import { getSortedPostsData } from '../../lib/blogPosts'
import Date from '../../components/blog/date'
import styles from '../../styles/blog/blog.module.css'
import Header from '../../components/new/Header'

import LandingSeparator from '../../components/svgs/separator1'

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
      <Header />
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