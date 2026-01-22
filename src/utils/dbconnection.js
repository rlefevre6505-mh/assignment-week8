import pg from "pg";

// no need to run dotenv.config(), as this is built in

export const db = new pg.Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});
