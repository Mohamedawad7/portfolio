import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HashingService } from 'src/common';
import { SeedService } from './seeding.service';

@Module({
  controllers: [UserController],
  providers: [UserService,HashingService,SeedService],
})
export class UserModule {}
