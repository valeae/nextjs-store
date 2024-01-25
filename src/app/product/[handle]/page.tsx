import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  return <ProductView product={product} />;
}

//como hacer fetch usando search params en un producto.
// interface ProductPageProps {
//   searchParams: {
//     id: string;
//   };
// }
//tambien nos podemos traer las props con el hook useParams, pero es importante que el componente sea de tipo 'use client', puesto que es un hook
// import { useParams, useSearchParams } from "next/navigation";

// export default function ProductPage() {
//   const params = useParams();
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");

//   console.log("searchParams", id);

//   return <ProductView/>
// }
