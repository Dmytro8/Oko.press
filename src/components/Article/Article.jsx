import React from "react";

import classes from "./Article.module.scss";

export const Article = ({ article }) => {
  return (
    <div className={classes.article}>
      <div className={classes.article__image}>
        <img src={article.thumb} alt={article.title} />
      </div>
      <h1 className={classes.article__title}>{article.title}</h1>
      <h2 className={classes.article__description}>{article.excerpt}</h2>
      <a className={classes.article__link} href={article.url} target="_blank">
        Read more
      </a>
    </div>
  );
};
