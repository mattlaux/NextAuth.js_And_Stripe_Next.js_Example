import { Pool } from "pg";
import DB from "../dbConfig";

// Creates new pool instance for Postgres from .env
// Import this pool into all API routes that require a pool connection
const pool = new Pool({
  user: DB.PGUSER,
  host: DB.PGHOST,
  database: DB.PGDATABASE,
  password: DB.PGPASSWORD,
  port: DB.PGPORT,
});

export default pool;
