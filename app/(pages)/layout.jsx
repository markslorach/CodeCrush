import NavBar from "../components/NavBar";

export default async function PagesLayout({ children }) {
  return (
    <main className="mx-5 sm:mx-10 pb-36">
      {children}
      <NavBar />
    </main>
  );
}
