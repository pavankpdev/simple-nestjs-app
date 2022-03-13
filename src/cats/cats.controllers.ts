import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('cars')
export class CatsControllers {
  @Get()
  findAll(): string {
    return 'Woah So many cats!';
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `The cat id is ${id}`;
  }
}
