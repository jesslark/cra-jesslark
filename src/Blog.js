import { useEffect, useState } from "react"
import Markdown from "react-markdown"

export default function Blog() {
  const [data, setData] = useState(null)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/jesslark/supercoolblog/issues")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    if (data && data.length) {
      // console.log(data)
      // console.log(data[1]?.body)
      buildBlogPosts(data)
    }
    // Important bits of data:
    // body
    // created_at
    // updated_at
    // title
  }, [data])

  const buildBlogPosts = data => {
    const postContent = (
      <div className="posts">
        {data.map(postData => {
          console.log(postData)
          return (
            <span key={postData.id}>
              <h1>
                <Markdown>{postData.title}</Markdown>
              </h1>
              <p>
                posted{" "}
                <Markdown className="post-date">{postData.created_at}</Markdown>
              </p>
              {/* {postData.created_at != postData.edited_at ? (
                <h6>
                  edited <Markdown>{postData.updated_at}</Markdown>
                </h6>
              ) : (
                " "
              )} */}
              <Markdown>{postData.body}</Markdown>
              <hr />
            </span>
          )
        })}
        <hr />
      </div>
    )

    setPosts(postContent)
  }

  return (
    <div className="content">
      {posts ? posts : "Submarine is hunting little bits of content treasure"}
      {/* <h1>blog coming soon!</h1>
      <p>
        An incoming blog post might be about how planning ahead works better
        than trying to do everything on the fly when you haven't architechted a
        whole site in a long time.
      </p>
      <p>
        Another might be about books and how Rothfuss is worth reading even if
        we don't get an ending. And how Pat's art is not ebout me, but about
        him, and how the pressure placed on artists with modern internet
        behavior is going to be untenable for many.
      </p>
      <p>
        Another might be about all my favorite crafts, video games, strategies
        for overcoming prefectionism and defeated perfectionism, learning piano
        or French or ASL or new tech, or literally anything. I am not a one note
        person.
      </p> */}
    </div>
  )
}
