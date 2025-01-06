import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import { days, months } from "./utils"

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
          const postDate = new Date(postData.created_at)
          const dDay = days[postDate.getDay()]
          const dMon = months[postDate.getMonth()]
          const dDate = postDate.getDate()
          const dYear = postDate.getFullYear()
          const dHrs = postDate.getHours()
          const dMins =
            postDate.getMinutes() > 9
              ? postDate.getMinutes()
              : `0${postDate.getMinutes()}`
          const displayDate = `${dDay} ${dMon} ${dDate}, ${dYear} at ${dHrs}:${dMins}`

          return (
            <span key={postData.id}>
              <h1 className="post-title">
                <Markdown>{postData.title}</Markdown>
              </h1>
              <div className="post-display-date">
                posted <Markdown className="post-date">{displayDate}</Markdown>
              </div>
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
      <h1>
        Welcome to my
        <br />
        <span className="name">Blog About Anything</span>.
      </h1>
      <h5>
        Among other topics, that might include:
        <ul>
          <li>web development & design</li>
          <li>books, games, & movies</li>
          <li>art, craft, & learning</li>
          <li>how all these things impact each other</li>
        </ul>
      </h5>
      <hr />
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
