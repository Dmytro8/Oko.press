import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Article } from "../Article/Article";
import InfiniteScroll from "react-infinite-scroll-component";

import classes from "./ArticleList.module.scss";

export const ArticleList = ({ articleData }) => {
  const [articles, setArticles] = useState(articleData);
  const [page, setpage] = useState(2);

  const fetchMoreData = async () => {
    const res = await fetch(
      `${process.env.API_URL}/posts?_page=${page}&_limit=10`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch");
    }
    articleData = await res.json();
    setpage((prevState) => prevState + 1);
    setArticles((prevState) => [...prevState, ...articleData]);
  };

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      className={classes.articles}
    >
      {articles.length > 0 &&
        articles.map((article, i) => {
          return (
            <Grid item key={i}>
              <Article article={article} />
            </Grid>
          );
        })}
      {articles.length === 0 && <h2>Nie ma publikacji</h2>}
    </InfiniteScroll>
  );
};
