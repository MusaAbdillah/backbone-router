const React = require('react')

module.exports = function Posts(props) {
  return <div>Posts
    <ol>
    {props.posts.map((post, index)=>
      <li key={post.slug}>
	      <a href={`#/posts/${post.slug}`} >{post.title}</a>
	      // i don't know what diff between sigle quote or double quote and this symbol(`)
      </li>
    )}
    </ol>
  </div>
}