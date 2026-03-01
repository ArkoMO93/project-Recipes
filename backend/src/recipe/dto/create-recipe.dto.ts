import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty({
    example: 'Classic Margherita pizza with fresh basil and mozzarella.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
