import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <h2 className='card-title'>{post.frontmatter.title}</h2>  
      <div className="post-date">Posted on {post.frontmatter.date}</div> 
      <p className='excerpt'>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
      <a className="btn">Read More</a>
      </Link>    
    </div>
  )
}