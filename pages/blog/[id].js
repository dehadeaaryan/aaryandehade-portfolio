import { getAllPostIds, getPostData } from '../../lib/blogPosts'
import Date from '../../components/date'

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
    
        <div className='container'>
        {postData.title}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>

    )
  }