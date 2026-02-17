import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecipesService } from './recipe.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getAll() {
    return this.recipesService.findAll();
  }

  @Post()
  create(@Body() body: { description: string }) {
    return this.recipesService.create(body);
  }
}
