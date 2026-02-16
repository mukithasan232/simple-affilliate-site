import { neon } from '@neondatabase/serverless';

// Initialize the Neon client
// We only initialize if the env var is present to avoid errors during build time
const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;

export default sql;
