"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Fish", slug: "fish" },
  { name: "Shrimp", slug: "shrimp" },
  { name: "Crab", slug: "crab" },
  { name: "Lobster", slug: "lobster" },
  { name: "Salmon", slug: "Salmon" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 rounded-2xl border border-white/10 bg-blue-600 p-5 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-white">Seafood Types</h2>

      <ul className="space-y-2">
        {categories.map((cat) => {
          const isActive = pathname === `/recipes/${cat.slug}`;

          return (
            <li key={cat.slug}>
              <Link
                href={`/recipes/${cat.slug}`}
                className={`block rounded-xl px-3 py-2 text-lg transition ${
                  isActive
                    ? "bg-white/20 font-semibold text-white shadow-sm"
                    : "text-white hover:bg-white/10 hover:text-blue-100"
                }`}
              >
                {cat.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}