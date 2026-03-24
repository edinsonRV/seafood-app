import Link from "next/link";

const categories = [
  { name: "Fish", slug: "fish", emoji: "🐟" },
  { name: "Shrimp", slug: "shrimp", emoji: "🦐" },
  { name: "Crab", slug: "crab", emoji: "🦀" },
  { name: "Lobster", slug: "lobster", emoji: "🦞" },
];

const featured = [
  { title: "Garlic Butter Shrimp", slug: "shrimp", time: "20 min" },
  { title: "Grilled Salmon", slug: "fish", time: "25 min" },
  { title: "Creamy Lobster Pasta", slug: "lobster", time: "30 min" },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
          <p className="text-sm text-white/70">🐠 Fresh ideas for your kitchen</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Welcome to <span className="text-blue-300">Seafood App</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Discover the best seafood recipes, explore categories, and find your next favorite dish.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/recipes"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Browse Recipes
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-bold">Explore Seafood</h2>
            <Link href="/recipes" className="text-sm text-blue-300 hover:text-blue-200">
              View all →
            </Link>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/recipes/${c.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="text-3xl">{c.emoji}</div>
                <div className="mt-3 font-semibold">{c.name}</div>
                <div className="mt-1 text-sm text-white/60">
                  Browse {c.name.toLowerCase()} recipes
                </div>
                <div className="mt-3 text-sm text-blue-300 opacity-0 transition group-hover:opacity-100">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">Featured Recipes</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {featured.map((r, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="text-sm text-white/60">{r.time}</div>
                <div className="mt-2 text-lg font-semibold">{r.title}</div>
                <div className="mt-4">
                  <Link
                    href={`/recipes/${r.slug}`}
                    className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/15"
                  >
                    See category →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
