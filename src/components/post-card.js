import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import get from "lodash/get"

import styles from "./post-card.module.css"

const PostCard = ({ slug, title, description, excerpt, picture }) => {
  const fluid = get(picture, "childImageSharp.fluid")
  return (
    <article className={styles.article}>
      <div className={styles.picture}>{fluid && <Img fluid={fluid} />}</div>
      <div className={styles.content}>
        <header>
          <h3 className={styles.h3}>
            <Link style={{ boxShadow: `none` }} to={slug}>
              {title}
            </Link>
          </h3>
        </header>
        <section className={styles.description}>
          <p
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
          />
        </section>
        <Link className={styles.link} to={slug} />
      </div>
    </article>
  )
}

export default PostCard
