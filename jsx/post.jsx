const React = require('react')

module.exports = function Product(props) {
console.log("================")
console.log(props.id)
console.log("================")
  let post = props.posts.find(element=>element.slug === props.id)
  console.log("POST ARE YOU HERE?=================")
  console.log(post)
  console.log("POST ARE YOU HERE?=================")
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p><a href={post.link} target="_blank">Continue reading...</a></p>
    </div>
  )
}