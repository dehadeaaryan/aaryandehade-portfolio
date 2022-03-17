import { getAllPostIds, getPostData } from '../../lib/blogPosts'
import Date from '../../components/blog/date'
import styles from '../../styles/blog/blog.module.css'
import Link from 'next/link'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}


export default function Post({ postData }) {
    return (
    
        <div className={styles.postContainer}>
          <h3 className={styles.postTitle}>{postData.title}</h3>
          <small><Date dateString={postData.date} /></small>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <br />
          <Link href="../blog/">
              <button className={styles.back}><a className={styles.back}>Back to all posts</a></button>
          </Link>
        </div>

    )
  }