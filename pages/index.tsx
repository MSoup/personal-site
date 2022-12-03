import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, tag }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              <Link href={`/posts/${id}`}>Go to post</Link>
              <br />
              {date}
              <br />
              Tags: {tag? `${tag}`: "none"}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}