import { Injectable } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Recipe[]> {
    return await this.prisma.recipe.findMany();
  }

  async create(data: CreateRecipeDto): Promise<Recipe> {
    // #TODO: Add steps and ingredients
    return await this.prisma.recipe.create({
      data: {
        description: data.description,
        steps: {
          create: {
            description: 'Step 1',
            order: 1,
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
