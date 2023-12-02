import NavBar from "../components/NavBar";

export default function PagesLayout({ children }) {
  return (
    <main className="mx-5 sm:mx-10 pb-44">
      {children}
      <NavBar />
    </main>
  );
}
