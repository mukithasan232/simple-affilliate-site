import { MetadataRoute } from 'next'
import { getAllProducts } from '@/lib/products'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://simple-affilliate-site.vercel.app'
    const products = await getAllProducts()

    const productEntries = products.map((p) => ({
        url: `${baseUrl}/product/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const categories = ['laptops', 'peripherals', 'audio', 'monitors'].map((c) => ({
        url: `${baseUrl}/categories/${c}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...productEntries,
        ...categories,
    ]
}
