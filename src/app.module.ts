import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsControllers } from './cats/cats.controllers';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { loggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsControllers],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(loggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
