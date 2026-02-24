"use client";

import { Recipe } from "@/types/recipe";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="size-5 text-muted-foreground" />
            <CardTitle>Recipe #{recipe.id}</CardTitle>
          </div>
          <Badge variant="secondary">#{recipe.id}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {recipe.description ?? "No description provided."}
        </p>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        ID: {recipe.id}
      </CardFooter>
    </Card>
  );
}
