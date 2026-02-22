import { Injectable } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Recipe[]> {
    return await this.prisma.recipe.findMany();
  }

  async create(data: { description: string }): Promise<Recipe> {
    return await this.prisma.recipe.create({
      data: {
        description: data.description,
      },
    });
  }
}
