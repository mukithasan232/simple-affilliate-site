import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sql = neon(process.env.DATABASE_URL);

async function setup() {
    console.log('Starting database setup...');

    try {
        // Read schema.sql
        const schemaPath = path.join(__dirname, '../schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        console.log('Creating tables...');
        // Split by semicolon and filter empty lines (basic split, might fail if semicolons are in strings)
        // But for this simple schema it's fine
        const statements = schema.split(';').filter(s => s.trim());
        for (const statement of statements) {
            // Neon's tagged template function doesn't like direct string passing
            // use query() for plain strings
            await sql.query(statement);
        }
        console.log('Tables created successfully.');

        // Seed data from products.json
        const productsPath = path.join(__dirname, '../src/data/products.json');
        if (fs.existsSync(productsPath)) {
            console.log('Seeding products...');
            const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

            for (const product of products) {
                await sql`
                    INSERT INTO products (
                        id, title, slug, category, price, old_price, discount, rating, 
                        images, affiliate_link, featured, badge, pros, cons, description, 
                        specifications, faqs
                    ) VALUES (
                        ${product.id}, ${product.title}, ${product.slug}, ${product.category}, 
                        ${product.price}, ${product.oldPrice}, ${product.discount}, ${product.rating || 0}, 
                        ${product.images}, ${product.affiliateLink}, ${product.featured || false}, 
                        ${product.badge || null}, ${product.pros || []}, ${product.cons || []}, 
                        ${product.description || ''}, ${JSON.stringify(product.specifications || {})}, 
                        ${JSON.stringify(product.faqs || [])}
                    ) ON CONFLICT (id) DO UPDATE SET
                        title = EXCLUDED.title,
                        slug = EXCLUDED.slug,
                        category = EXCLUDED.category,
                        price = EXCLUDED.price,
                        old_price = EXCLUDED.old_price,
                        discount = EXCLUDED.discount,
                        rating = EXCLUDED.rating,
                        images = EXCLUDED.images,
                        affiliate_link = EXCLUDED.affiliate_link,
                        featured = EXCLUDED.featured,
                        badge = EXCLUDED.badge,
                        pros = EXCLUDED.pros,
                        cons = EXCLUDED.cons,
                        description = EXCLUDED.description,
                        specifications = EXCLUDED.specifications,
                        faqs = EXCLUDED.faqs
                `;
            }
            console.log(`Seeded ${products.length} products.`);
        }

        console.log('Database setup complete!');
    } catch (error) {
        console.error('Error setting up database:', error);
        process.exit(1);
    }
}

setup();
