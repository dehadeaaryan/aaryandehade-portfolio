import Link from 'next/link'
import { getSortedPostsData } from '../../lib/blogPosts'
import Date from '../../components/date'

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
        <>
        {/* Keep the existing code here */}
  
        {/* Add this <section> tag below the existing <section> tag */}
        <section className='container'>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>

            ))}
          </ul>
        </section>
        </>
    )
  }