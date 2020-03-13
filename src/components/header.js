import React from "react"
import { Link } from "gatsby"

import logoDark from "../../content/assets/logo--dark.svg"
import styles from "./header.module.css"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className={styles.hn}>
        <Link className={styles.link} to={`/`}>
          <img className={styles.logo} src={logoDark} alt="Logo" /> on Gatsby
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className={styles.hn}>
        <Link className={styles.link} to={`/`}>
          <img className={styles.logo} src={logoDark} alt="Logo" /> on Gatsby
        </Link>
      </h3>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>{header}</div>
    </header>
  )
}

export default Header
