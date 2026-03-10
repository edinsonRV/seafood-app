// components/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          🐟 Seafood App
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/recipes" className="hover:underline">
            Recipes
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
