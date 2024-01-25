import { env } from "app/config/env"

export const ShopifyUrls = {
    products: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
        mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/302460633274/products.json`
    },
    collections: {
        'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
        'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`
    }
}