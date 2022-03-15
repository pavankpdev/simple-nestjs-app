import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsControllers } from './cats/cats.controllers';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsControllers],
  providers: [AppService, CatsService],
})
export class AppModule {}
