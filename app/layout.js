import { Ubuntu } from "next/font/google";
import "./globals.css";

// Auth Provider
import { ClerkProvider } from "@clerk/nextjs";
// Components
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
      <html className="overflow-y-scroll" lang="en">
        <body className={`${ubuntu.className} max-w-lg mx-auto bg-stone-50`}>
          <main className="min-h-screen py-24 px-5 ">
            {children}
            <NavBar />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
