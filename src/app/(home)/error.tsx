"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, []);

  return (
    <div>
      <h1> :C </h1>
      <p> Ha ocurrido un error:{error.message}</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}
