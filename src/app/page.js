// app/page.jsx
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
        {/* HERO */}
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
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-400 transition"
            >
              Browse Recipes
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* CATEGORIES */}
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
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="text-3xl">{c.emoji}</div>
                <div className="mt-3 font-semibold">{c.name}</div>
                <div className="mt-1 text-sm text-white/60">
                  Browse {c.name.toLowerCase()} recipes
                </div>
                <div className="mt-3 text-sm text-blue-300 opacity-0 group-hover:opacity-100 transition">
                  Open →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className="mt-10">
          <h2 className="text-xl font-bold">Featured Recipes</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {featured.map((r, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="text-sm text-white/60">{r.time}</div>
                <div className="mt-2 text-lg font-semibold">{r.title}</div>
                <div className="mt-4">
                  <Link
                    href={`/recipes/${r.slug}`}
                    className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition"
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


/*export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Welcome to Seafood App</h1>
      <p className="text-lg text-slate-700">
        Discover the best seafood recipes from around the world.
      </p>
    </section>
  );
}*/


/*export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}*/
