export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Navegacion de las Categorías</nav>
      {children}
    </main>
  );
}
