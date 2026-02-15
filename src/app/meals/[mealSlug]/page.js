export default async function MealSlugPage({ params }) {
  const { mealSlug } = await params; // 👈 importante

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize text-blue-600 mb-4">
        {mealSlug} Dishes
      </h1>
      <p className="text-blue-600 mb-4">
        Showing all delicious recipes with{" "}
        <span className="font-semibold">{mealSlug}</span>.
      </p>
    </div>
  );
}
