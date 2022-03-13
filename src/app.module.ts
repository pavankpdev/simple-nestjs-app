import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsControllers } from './cats/cats.controllers';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsControllers],
  providers: [AppService],
})
export class AppModule {}
