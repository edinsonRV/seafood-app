export default function RecipesPage() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
      <p className="text-sm font-medium text-blue-300">Recipe Explorer</p>

      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-blue-300">
        Browse Seafood Recipes
      </h1>

      <p className="mt-4 max-w-3xl text-white/70">
        Select a seafood type from the sidebar to explore recipes by category.
        You can browse dishes made with fish, shrimp, crab, or lobster.
      </p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-md">
        <div className="text-5xl">🦞</div>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Start with a category
        </h2>

        <p className="mt-3 text-white/70">
          Use the sidebar to choose a seafood type and discover recipes tailored
          to that selection.
        </p>
      </div>
    </section>
  );
}