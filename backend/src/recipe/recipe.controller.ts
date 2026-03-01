import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipeResponseDto } from './dto/recipe-response.dto';
import { RecipesService } from './recipe.service';

@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @ApiOkResponse({ type: RecipeResponseDto, isArray: true })
  getAll(): Promise<RecipeResponseDto[]> {
    return this.recipesService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateRecipeDto })
  @ApiCreatedResponse({ type: RecipeResponseDto })
  create(@Body() body: CreateRecipeDto): Promise<RecipeResponseDto> {
    return this.recipesService.create(body);
  }
}
