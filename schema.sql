CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  old_price DECIMAL(10, 2),
  discount DECIMAL(5, 2),
  rating DECIMAL(3, 1),
  images TEXT[] NOT NULL,
  affiliate_link TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  badge TEXT,
  pros TEXT[],
  cons TEXT[],
  description TEXT,
  specifications JSONB,
  faqs JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
