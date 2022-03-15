import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsControllers } from './cats.controllers';

@Module({
  controllers: [CatsControllers],
  providers: [CatsService]
})
export class CatsModule {}
