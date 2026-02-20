import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(process.env.DATABASE_URL);

async function check() {
    try {
        const categories = await sql`SELECT category, COUNT(*) as count FROM products GROUP BY category`;
        console.log('Categories:', JSON.stringify(categories, null, 2));
        const total = await sql`SELECT COUNT(*) FROM products`;
        console.log('Total Products:', total[0].count);
        const latest = await sql`SELECT title, category FROM products ORDER BY created_at DESC LIMIT 5`;
        console.log('Latest 5:', JSON.stringify(latest, null, 2));
    } catch (e) {
        console.error(e);
    }
}
check();
