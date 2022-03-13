import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// DTO
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsControllers {
  @Get()
  findAll(): string {
    return 'Woah So many cats!';
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `The cat id is ${id}`;
  }

  @Post('new')
  createNewCat(@Body() createCatDto: CreateCatDto) {
    return `Yo cat is created!`;
  }
}
