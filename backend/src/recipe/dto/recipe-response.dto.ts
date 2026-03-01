import { ApiProperty } from '@nestjs/swagger';

export class RecipeResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({
    type: String,
    example: 'Classic Margherita pizza with fresh basil and mozzarella.',
    nullable: true,
  })
  description: string | null;
}
