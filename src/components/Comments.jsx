import { db } from "@/utils/dbconnection";

export default async function Comments({ params }) {
  const postID = await params;

  const query = await db.query(
    `SELECT * FROM blog_comments WHERE post_id = $1`,
    [postID],
  );

  const data = query.rows;

  return (
    <div>
      <h4>Comments:</h4>
      {data.map((comment, i) => {
        const yearString = comment.date.toString().slice(0, 4);
        const monthString = comment.date.toString().slice(5, 7);
        const dayString = comment.date.toString().slice(8, 10);
        const dateString = `${dayString} / ${monthString} / ${yearString}`;
        return (
          <div key={`post${postID}_comment${i}`}>
            <div>
              <p>{comment.username} </p>
              <p> {dateString}</p>
            </div>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
