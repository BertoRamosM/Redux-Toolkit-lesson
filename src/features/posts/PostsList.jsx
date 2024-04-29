import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { useDispatch } from "react-redux";
import { postDelete } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
    <article key={post.id} style={{position: 'relative'}}>
      <h3>{post.title}</h3>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
     </p>
      <button style={{ position: "absolute", right: 5, top: 5, color: 'red', backgroundColor: 'white'}}
      onClick={()=> dispatch(postDelete(post.id))}>X</button>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ))
  

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
  </section>
    
  )
}

export default PostsList