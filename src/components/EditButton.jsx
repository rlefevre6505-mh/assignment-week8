import { db } from "../utils/dbconnection";
import { revalidatePath } from "next/cache";
import styles from "./EditButton.module.css";

export default function EditButton({ prop }) {
  async function handleSubmit(rawFormData) {
    "use server";
    const formValues = {
      comment: rawFormData.get("comment"),
    };
    try {
      db.query(
        `UPDATE blog_comments SET comment='${formValues.comment}' WHERE id = $1`,
        [prop],
      );
      console.log(formValues);
    } catch (error) {
      console.error(error);
    }
    revalidatePath("/postID");
  }

  return (
    <div className={styles.box}>
      <form
        action={handleSubmit}
        className="@apply flex flex-col items-center justify-center self-center"
      >
        <label htmlFor="comment">Edit your comment:</label>
        <input
          className="px-2 py-1 border-2 border-solid border-[#00000070]  rounded-lg"
          type="text"
          name="comment"
          maxLength={999}
          required
        ></input>
        <button
          className="my-button m-8 p-2 border-2 border-solid border-[#00000070] rounded-lg"
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
