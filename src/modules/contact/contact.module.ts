import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { contactModel, ContactRepository } from 'src/common';
import { ContactService } from './contact.service';
import { ContactSeedService } from './seed.service';

@Module({
  controllers: [ContactController],
  providers: [ContactRepository, ContactService, ContactSeedService],
  imports: [contactModel],
})
export class ContactInfoModule {}
