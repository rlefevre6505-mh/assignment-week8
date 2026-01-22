import { db } from "@/utils/dbconnection";
import Link from "next/link";

// TODO: render a list of posts
// static route

export default async function PostsPage({ searchParams }) {
  //get data
  const query = await db.query(`SELECT * FROM blog_posts`);
  const data = query.rows;

  //get params
  const queryString = await searchParams;

  //sorting logic:
  if (queryString.sort === "desc") {
    data.sort((a, b) => {
      console.log(a.name);
      return b.title.localeCompare(a.title);
    });
  } else if (queryString.sort === "asc") {
    data.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  return (
    <>
      <h2>All Blog Posts</h2>
      <div>
        <Link href="/posts?sort=asc">Sort By A-Z</Link>
        <Link href="/posts?sort=desc">Sort Z-A</Link>
      </div>
      <div id="all-posts">
        {data.map((post, i) => {
          const yearString = post.date.toString().slice(0, 4);
          const monthString = post.date.toString().slice(5, 7);
          const dayString = post.date.toString().slice(8, 10);
          const dateString = `${dayString} - ${monthString} - ${yearString}`;
          return (
            <div key={`post${i}`} id="blog-post">
              <h3>{post.title}</h3>
              <p>
                {post.location} - {dateString}
              </p>
              <p>{post.blurb}</p>
              <p>{post.blog_text}</p>
              <Link href={`/posts/${post.id}`}>View / add comments</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
