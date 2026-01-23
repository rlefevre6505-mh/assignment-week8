import { revalidatePath } from "next/cache";
import { db } from "@/utils/dbconnection";

export default async function CommentForm({ params }) {
  // capture current date for submission
  const today = new Date();

  const postID = await params;

  async function handleSubmit(rawFormData) {
    "use server";
    const formValues = {
      username: rawFormData.get("username"),
      comment: rawFormData.get("comment"),
      date: today,
      post_id: postID,
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
    revalidatePath(`/posts/${postID}`);
  }

  return (
    <>
      <form
        action={handleSubmit}
        className="@apply flex flex-col items-center justify-center self-center"
      >
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
          className="my-button m-8 p-2 border-2 border-solid border-[#ffbb00] rounded-lg"
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
      ;
    </>
  );
}
