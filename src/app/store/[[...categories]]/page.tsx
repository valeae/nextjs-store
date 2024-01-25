import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import {
  getCollectionProducts,
  getCollections,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

// a todos los props agregarle una interfaz para saber que te llegara de esta manera bo arroja error
interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function Category(props: CategoryProps) {
  //const products = await getProducts() - const collections = await getCollections() este es el patron de solicitud de datos de manera paralela, por que getProducts como, getCollections los servicios son separados
  //Si fuera de manera secuencial uno estaria bloqueado hasta que el otro se complete, esto aplicaria a casos donde fuera un getProductbyId, primero se tendria que terminar getProducts para hacer el llamado del siguiente.

  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
