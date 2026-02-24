import { Recipe } from "@/types/recipe";
import { RecipeCard } from "@/components/recipe-card";
import { UtensilsCrossed } from "lucide-react";

// TODO: Check in local
// TODO: Add shared types

const SERVER_API_URL =
	process.env.API_URL ||
	process.env.NEXT_PUBLIC_API_URL ||
	"http://localhost:3001";

async function getRecipes(): Promise<Recipe[]> {
	const res = await fetch(`${SERVER_API_URL}/recipes`, {
		cache: "no-store",
	});

	if (!res.ok) {
		return [];
	}

	return res.json() as Promise<Recipe[]>;
}

export default async function RecipesPage() {
	const recipes = await getRecipes();

	return (
		<div className="min-h-screen bg-background">
			<div className="mx-auto max-w-5xl px-6 py-16">
				<header className="mb-12">
					<div className="flex items-center gap-3 mb-2">
						<UtensilsCrossed className="size-8" />
						<h1 className="text-3xl font-bold tracking-tight">Recipes</h1>
					</div>
					<p className="text-muted-foreground">
						Browse all recipes &mdash; {recipes.length} found
					</p>
				</header>

				{recipes.length === 0 ? (
					<div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20">
						<UtensilsCrossed className="size-12 text-muted-foreground mb-4" />
						<h2 className="text-lg font-semibold mb-1">No recipes yet</h2>
						<p className="text-sm text-muted-foreground">
							Create your first recipe via the API.
						</p>
					</div>
				) : (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{recipes.map((recipe) => (
							<RecipeCard key={recipe.id} recipe={recipe} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
