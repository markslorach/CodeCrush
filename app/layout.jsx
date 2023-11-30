import { Ubuntu } from "next/font/google";
import "./globals.css";

// Auth Provider
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "./components/NavBar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "CodeCrush",
  description: "Challenge yourself with a daily coding quiz.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark:bg-[#041d3e]">
        <body className={`${ubuntu.className} max-w-md mx-auto`}>
          <main className="mx-5 sm:mx-10 pb-36">
          {children}
          <NavBar/>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
