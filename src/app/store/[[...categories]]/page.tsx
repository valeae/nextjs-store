import React from "react";

// a todos los props agregarle una interfaz para saber que te llegara de esta manera bo arroja error
interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;

  return <h1>Categoria Dinámica {categories}</h1>;
}
