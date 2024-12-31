import { useState } from "react"

import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded" // dark theme
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded" // light theme
import ClearRoundedIcon from "@mui/icons-material/ClearRounded" // no stylesheet
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"

import "./App.css"

function App() {
  const [theme, setTheme] = useState("app dark")
  const [page, setPage] = useState("main")

  const handleNavClick = newPage => {
    setPage(newPage)
    // change active class
  }

  const handleThemeClick = () => {
    console.log(theme)
    if (theme === "app dark") {
      setTheme("app light")
    } else if (theme === "app light") {
      setTheme("none")
    } else {
      setTheme("app dark")
    }
  }

  const themeIcon =
    theme === "app dark" ? (
      <BedtimeRoundedIcon className="icon" />
    ) : theme === "app light" ? (
      <Brightness7RoundedIcon className="icon" />
    ) : (
      <ClearRoundedIcon className="icon" />
    )

  return (
    <div className={theme}>
      {/* <a onClick={handleThemeClick} className="theme">
        {themeIcon}
        toggle theme
      </a> */}
      <header>
        <a
          onClick={() => handleNavClick("main")}
          className={`nav${page === "main" ? " active" : ""}`}
        >
          {page === "main" ? (
            <KeyboardArrowDownRoundedIcon className="icon" />
          ) : (
            <KeyboardArrowRightRoundedIcon className="icon" />
          )}
          Jess Lark
        </a>
        &nbsp;
        <a
          onClick={() => handleNavClick("projects")}
          className={`nav${page === "projects" ? " active" : ""}`}
        >
          {page === "projects" ? (
            <KeyboardArrowDownRoundedIcon className="icon" />
          ) : (
            <KeyboardArrowRightRoundedIcon className="icon" />
          )}
          Projects
        </a>
        &nbsp;
        <a
          onClick={() => handleNavClick("blog")}
          className={`nav${page === "blog" ? " active" : ""}`}
        >
          {page === "blog" ? (
            <KeyboardArrowDownRoundedIcon className="icon" />
          ) : (
            <KeyboardArrowRightRoundedIcon className="icon" />
          )}
          Blog
        </a>
      </header>
      {page === "main" ? (
        <div className="content">
          <h1>
            Hi! I'm <span className="name">Jess Lark.</span> <br />I do web
            development and design.
          </h1>
          <h3>
            I prioritize:
            <ul>
              <li>accessibility</li>
              <li>great customer experience</li>
              <li>efficient, maintainable code</li>
            </ul>
          </h3>
          <h3>
            You can find me here:
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/jesslark">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/jesslark">GitHub</a>
              </li>
              <li>
                <a href="https://codepen.io/jesslark/pens/">CodePen</a>
              </li>
            </ul>
          </h3>
        </div>
      ) : page === "projects" ? (
        <div className="content">
          <h1>projects incoming!</h1>
        </div>
      ) : (
        <div className="content">
          <h1>blog coming soon!</h1>
          <p>
            An incoming blog post might be about how planning ahead works better
            than trying to do everything on the fly when you haven't
            architechted a whole site in a long time.
          </p>
          <p>
            Another might be about books and how Rothfuss is worth reading even
            if we don't get an ending. And how Pat's art is not ebout me, but
            about him, and how the pressure placed on artists with modern
            internet behavior is going to be untenable for many.
          </p>
          <p>
            Another might be about all my favorite crafts, video games,
            strategies for overcoming prefectionism and defeated perfectionism,
            learning piano or French or ASL or new tech, or literally anything.
            I am not a one note person.
          </p>
        </div>
      )}
      <footer>
        <div className="footer-content">
          © Jess Lark 2025 |{" "}
          <a href="https://www.linkedin.com/in/jesslark">LinkedIn</a> |{" "}
          <a href="https://github.com/jesslark">GitHub</a> |{" "}
          <a href="https://codepen.io/jesslark/pens/">CodePen</a>
        </div>
      </footer>
    </div>
  )
}

export default App
