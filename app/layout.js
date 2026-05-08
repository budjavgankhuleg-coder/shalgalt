import "./globals.css";
import { FavProvider } from "@/context/FavContext";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-6 max-w-6xl mx-auto bg-gray-50">
        <FavProvider>
          <nav className="flex gap-6 mb-8 py-4 border-b font-bold text-lg">
            <Link href="/" className="hover:text-blue-600">
              Дэлгүүр
            </Link>
            <Link href="/favorites" className="hover:text-blue-600">
              Хадгалсан ★
            </Link>
          </nav>
          {children}
        </FavProvider>
      </body>
    </html>
  );
}
