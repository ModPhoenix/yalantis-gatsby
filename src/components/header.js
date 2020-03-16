import React from "react"
import { Link } from "gatsby"

import logoDark from "../../content/assets/logo--dark.svg"
import styles from "./header.module.css"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let HeaderElement = "h1"

  if (location.pathname !== rootPath) {
    HeaderElement = "h3"
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderElement className={styles.hn}>
          <Link className={styles.link} to={`/`}>
            <img className={styles.logo} src={logoDark} alt="Logo" /> on Gatsby
          </Link>
        </HeaderElement>
      </div>
    </header>
  )
}

export default Header
