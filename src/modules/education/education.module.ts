import { Module } from '@nestjs/common';
import { educationModel } from 'src/common/models/education.model';
import { EducationService } from './education.service';
import { EducationRepository } from 'src/common';
import { EducationController } from './education.controller';
import { EducationSeedService } from './seeding.service';

@Module({
  imports: [educationModel],
  providers: [EducationService, EducationRepository, EducationSeedService],
  controllers: [EducationController],
})
export class EducationModule {}
