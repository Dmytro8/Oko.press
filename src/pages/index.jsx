import { Container } from "@material-ui/core";
import Head from "next/head";
import { ArticleList } from "../components/ArticleList";
import styles from "../styles/Home.module.css";

export default function Home({ articleData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oko.press</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Container maxWidth="xl">
          <h1 className={styles.title}>{"{Oko.press}"}</h1>
          <h2>Zobacz co przygotowaliśmy dla Ciebie dzisiaj</h2>
          <hr />
        </Container>
      </header>

      <main className={styles.main}>
        <Container maxWidth={"xl"}>
          <ArticleList articleData={articleData} />
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://dmytrodev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Dmytro Patalakha
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  let articleData = null;
  try {
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
  } catch (err) {
    articleData = { error: { message: err.message } };
  }
  return { props: { articleData } };
};
