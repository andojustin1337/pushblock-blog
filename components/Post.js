import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <h3 className='card-title'>{post.frontmatter.title}</h3>  
      <div className="post-date">Posted on {post.frontmatter.date}</div> 
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>    
    </div>
  )
}