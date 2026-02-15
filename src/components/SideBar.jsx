import Link from "next/link";

const categories = [
  { name: "Fish", slug: "fish" },
  { name: "Shrimp", slug: "shrimp" },
  { name: "Crab", slug: "crab" },
  { name: "Lobster", slug: "lobster" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-600 rounded-2xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/meals/${cat.slug}`}
              className="block hover:text-blue-300 text-white cursor-pointer"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
