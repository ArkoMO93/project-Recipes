import { Injectable } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Recipe[]> {
    return await this.prisma.recipe.findMany();
  }

  async create(data: {
    description: string;
    steps?: string[];
    ingredients?: string[];
  }): Promise<Recipe> {
    // #TODO: Add steps and ingredients
    return await this.prisma.recipe.create({
      data: {
        description: data.description,
        steps: {
          create: {
            description: 'Step 1',
          },
        },
        recipeIngredients: {
          create: {
            ingredient: {
              create: {
                name: 'Ingredient 1',
              },
            },
          },
        },
      },
    });
  }
}
