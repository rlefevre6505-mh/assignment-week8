// TODO: render each post with related comments
// this is a nested dynamic route

import { db } from "@/utils/dbconnection.js";
import { revalidatePath } from "next/cache";
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import styles from "./postID.module.css";

// add delete (and edit) buttons to each comment

export default async function PostID({ params }) {
  const { postID } = await params;

  const query = await db.query(`SELECT * FROM blog_posts WHERE id = $1`, [
    postID,
  ]);
  const data = query.rows[0];

  const commentQuery = await db.query(
    `SELECT * FROM blog_comments WHERE post_id = $1`,
    [postID],
  );
  const comments = commentQuery.rows;

  const yearString = data.date.toString().slice(11, 15);
  const monthString = data.date.toString().slice(4, 7);
  const dayString = data.date.toString().slice(8, 10);
  const dateString = `${yearString} - ${dayString} ${monthString}`;

  const today = new Date();

  async function handleSubmit(rawFormData) {
    "use server";
    const formValues = {
      username: rawFormData.get("username"),
      comment: rawFormData.get("comment"),
      date: today,
      post_id: data.id,
    };
    try {
      db.query(
        `INSERT INTO blog_comments (username, comment, date, post_id) VALUES ($1, $2, $3, $4)
    `,
        [
          formValues.username,
          formValues.comment,
          formValues.date,
          formValues.post_id,
        ],
      );
      console.log(formValues);
    } catch (error) {
      console.error(error);
    }
    revalidatePath("/postID");
  }

  return (
    <>
      <div className={styles.post}>
        <h3>{data.title}</h3>
        <p>
          {data.location} - {dateString}
        </p>
        <p>{data.blurb}</p>
        <p>{data.blog_text}</p>
      </div>
      <form action={handleSubmit} className={styles.form}>
        <h4>Add a comment:</h4>
        <label htmlFor="username">Your user name:</label>
        <input
          className="px-2 py-1 border-2 border-solid border-[#00000070] rounded-lg"
          type="text"
          maxLength={30}
          name="username"
          required
        ></input>
        <label htmlFor="comment">Your comment:</label>
        <input
          className="px-2 py-1 border-2 border-solid border-[#00000070]  rounded-lg"
          type="text"
          name="comment"
          maxLength={999}
          required
        ></input>
        <label htmlFor="date"></label>
        <input disabled type="hidden" name="date" value={today}></input>
        <button
          className="my-button m-8 p-2 border-2 border-solid border-[#00000070] rounded-lg"
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
      <div>
        <p className="mb-4">Comments on this post:</p>
        {comments.map((comment, i) => {
          const yearString = comment.date.toString().slice(11, 15);
          const monthString = comment.date.toString().slice(4, 7);
          const dayString = comment.date.toString().slice(8, 10);
          const dateString = `${yearString} - ${dayString} ${monthString}`;
          return (
            <div className={styles.comment} key={`post${postID}_comment${i}`}>
              <div className={styles.commentbody}>
                <div className="@apply flex flex-row gap-4">
                  <p>{comment.username} </p>
                  <p> {dateString}</p>
                </div>
                <p>{comment.comment}</p>
                <DeleteButton prop={comment.id}>Delete comment</DeleteButton>
              </div>

              <div>
                <EditButton prop={comment.id} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
