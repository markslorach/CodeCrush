import { Ubuntu } from "next/font/google";
import "./globals.css";

// Auth Provider
import { ClerkProvider } from "@clerk/nextjs";

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
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
