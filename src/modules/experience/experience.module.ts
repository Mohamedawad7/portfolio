import { Module } from '@nestjs/common';
import { experienceModel, ExperienceRepository } from 'src/common';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { ExperienceSeedService } from './seeding.service';

@Module({
  imports: [experienceModel],
  providers: [ExperienceRepository, ExperienceService, ExperienceSeedService],
  controllers: [ExperienceController],
})
export class ExperienceModule {}
