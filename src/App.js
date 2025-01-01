import { useState } from "react"
import { Route, Routes } from "react-router"
import { NavLink } from "react-router"

import About from "./About"
import Blog from "./Blog"
import Projects from "./Projects"
import "./App.css"

import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded" // dark theme
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded" // light theme
import ClearRoundedIcon from "@mui/icons-material/ClearRounded" // no stylesheet
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"

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
        <NavLink
          className="nav"
          to="/"
          onClick={() => handleNavClick("main")}
          end
        >
          {page === "main" ? (
            <KeyboardArrowDownRoundedIcon className="icon" />
          ) : (
            <KeyboardArrowRightRoundedIcon className="icon" />
          )}{" "}
          Jess Lark
        </NavLink>
        <NavLink
          className="nav"
          to="/projects"
          onClick={() => handleNavClick("projects")}
          end
        >
          {page === "projects" ? (
            <KeyboardArrowDownRoundedIcon className="icon" />
          ) : (
            <KeyboardArrowRightRoundedIcon className="icon" />
          )}{" "}
          Projects
        </NavLink>
        <NavLink
          className="nav"
          to="/blog"
          onClick={() => handleNavClick("blog")}
          end
        >
          {page === "blog" ? (
            <KeyboardArrowDownRoundedIcon className="icon" />
          ) : (
            <KeyboardArrowRightRoundedIcon className="icon" />
          )}{" "}
          Blog
        </NavLink>
      </header>
      {/* <header>
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
      </header> */}
      <Routes>
        <Route index element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
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
