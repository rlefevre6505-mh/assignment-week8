import { db } from "../utils/dbconnection";

export default function DeleteButton({ prop }) {
  async function handleDelete() {
    "use server";
    const query = await db.query(`DELETE FROM blog_comments WHERE id = $1`, [
      prop,
    ]);
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
