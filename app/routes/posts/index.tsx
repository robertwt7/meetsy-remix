import { useLoaderData, Link } from 'remix'
import { getPosts } from '../../post.server'

export type Post = {
  slug: string
  title: string
}

export let loader = () => {
  return getPosts()
}

export default function Posts() {
  let posts = useLoaderData<Post[]>()
  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
