import { env } from "app/config/env";
import { ShopifyUrls } from "./urls";


export const getProducts = async () => {
    try {
        const response = await fetch(ShopifyUrls.products.all,
            {
                //cada vez que se realiza una peticion debemos agregarle de preferencia los headers
                headers: {
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN
                },
            }
        );

        const { products } = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
};