import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SecondProductModule } from './second-product/second-product.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [ProductModule, UserModule, SecondProductModule, MeetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
