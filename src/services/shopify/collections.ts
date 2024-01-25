import { env } from "app/config/env";
import { ShopifyUrls } from "./urls";

export const getCollections = async () => {
    try {
        const response = await fetch(ShopifyUrls.collections.all,
            {
                //cada vez que se realiza una peticion debemos agregarle de preferencia los headers
                headers: new Headers({
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN
                }),
            }
        );

        const { smart_collections } = await response.json()
        const transformedCollections = smart_collections.map((collection: any) => {
            return {
                id: collection.id,
                title: collection.title,
                handle: collection.handle
            }
        })

        return transformedCollections

    } catch (error) {
        console.log(error);
    }
};

export const getCollectionProducts = async (id: string) => {
    try {
        const response = await fetch(ShopifyUrls.collections.products(id), {
            headers: new Headers({
                "X-Shopify-Access-Token": env.SHOPIFY_TOKEN
            })
        });

        const { products } = await response.json()

        return products

    } catch (error) {
        console.log(error);

    }
}