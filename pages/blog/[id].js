import { getAllPostIds, getPostData } from '../../lib/blogPosts'
import Date from '../../components/date'
import styles from '../../styles/blog.module.css'

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
        <small class><Date dateString={postData.date} /></small>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>

    )
  }