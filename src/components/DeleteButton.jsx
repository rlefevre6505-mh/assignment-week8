import { db } from "../utils/dbconnection";
import { revalidatePath } from "next/cache";

export default function DeleteButton({ prop }) {
  async function handleDelete() {
    "use server";
    try {
      const query = await db.query(`DELETE FROM blog_comments WHERE id = $1`, [
        prop,
      ]);
    } catch (error) {
      console.error(error);
    }
    revalidatePath("/postID");
  }

  return (
    <button
      className="my-button m-8 p-2 border-2 border-solid border-[#00000070] rounded-lg max-w-48"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
