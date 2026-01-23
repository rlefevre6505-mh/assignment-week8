import { db } from "@/utils/dbconnection";
import Link from "next/link";
import styles from "./posts.module.css";

export default async function PostsPage({ searchParams }) {
  //get data
  const query = await db.query(`SELECT * FROM blog_posts`);
  const data = query.rows;
  console.log(data[0].date);

  //get params
  const queryString = await searchParams;

  //attempt at sorting by date:
  // if (queryString.sort === "desc") {
  //   data.sort((a, b) => {
  //     b.date.getTime() - a.date.getTime();
  //   });
  // } else if (queryString.sort === "asc") {
  //   data.sort((a, b) => {
  //     a.date.getTime() - b.date.getTime();
  //   });
  // }

  //sorting by title:
  if (queryString.sort === "desc") {
    data.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  } else if (queryString.sort === "asc") {
    data.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  } else if (queryString.sort === "datedesc") {
    data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  } else if (queryString.sort === "dateasc") {
    data.sort((a, b) => {
      new Date(a.date) - new Date(b.date);
    });
  }

  return (
    <>
      <h2>All Blog Posts</h2>
      <br></br>
      <div>
        <Link
          className="@apply ml-4 mb-2 text-var(--color-purple)"
          href="/posts?sort=asc"
        >
          Sort By Title A-Z
        </Link>
        <br></br>
        <Link className="@apply ml-4 mb-2" href="/posts?sort=desc">
          Sort By Title Z-A
        </Link>
        <br></br>
        <Link className="@apply ml-4 mb-2" href="/posts?sort=dateasc">
          Sort By Newest
        </Link>
        <br></br>
        <Link className="@apply ml-4 mb-2" href="/posts?sort=datedesc">
          Sort By Oldest
        </Link>
        <br></br>
      </div>
      <div id="all-posts" className="@apply flex flex-col items-center">
        {data.map((post, i) => {
          const yearString = post.date.toString().slice(11, 15);
          const monthString = post.date.toString().slice(4, 7);
          const dayString = post.date.toString().slice(8, 10);
          const dateString = `${yearString} - ${dayString} ${monthString}`;
          return (
            <div key={`post${i}`} id="blog-post">
              <h3 className="text-center">{post.title}</h3>
              <p className="@apply text-40 text-center mb-4">
                {post.location} - {dateString}
              </p>
              <p className="@apply text-40 text-center mb-4">{post.blurb}</p>
              <p className="post-body">{post.blog_text}</p>
              <Link
                id="link"
                className="styles.link"
                href={`/posts/${post.id}`}
              >
                View full post & add/edit comments
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
