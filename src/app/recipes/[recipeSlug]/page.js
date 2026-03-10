export default async function RecipeSlugPage({ params }) {
  const { recipeSlug } = await params; // 👈 importante

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize text-blue-600 mb-4">
        {recipeSlug} Dishes
      </h1>
      <p className="text-blue-600 mb-4">
        Showing all delicious recipes with{" "}
        <span className="font-semibold">{recipeSlug}</span>.
      </p>
    </div>
  );
}
