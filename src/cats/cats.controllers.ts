import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// SERVICES
import { CatsService } from './cats.service';

// DTO
import { CreateCatDto } from './create-cat.dto';

// TYPES
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsControllers {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `The cat id is ${id}`;
  }

  @Post('new')
  createNewCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}
