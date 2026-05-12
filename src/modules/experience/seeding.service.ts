import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experience, ExperienceDocument } from 'src/common';
import { jobType } from 'src/common';

@Injectable()
export class ExperienceSeedService implements OnModuleInit {
  constructor(
    @InjectModel(Experience.name)
    private experienceModel: Model<ExperienceDocument>,
  ) {}

  async onModuleInit() {
    await this.seedExperience();
  }

  async seedExperience() {
    const exists = await this.experienceModel.findOne({
      companyName: 'Route Academy',
    });

    if (!exists) {
      console.log('Seed: Creating experience document...');

      const experienceData = {
        position: 'Backend Developer',
        companyName: 'Route Academy',
        location: jobType.hybrid, // عدّل حسب enum عندك (remote/hybrid/on-site)
        startDate: new Date('2025-04-01'),
        endDate: new Date('2025-12-01'),
        currentlyWorking: false,
        summary:
          'Developed backend services using Node.js/TypeScript; designed and optimized RESTful APIs for scalability and maintainability. Implemented JWT-based security protocols, managed MongoDB and MySQL databases, and deployed on AWS (EC2) using Docker and Nginx — reducing deployment time by ~10%. Automated CI/CD workflows with GitHub Actions; participated in code reviews for production-grade environments.',
      };

      await this.experienceModel.create(experienceData);

      console.log('Seed: Experience created successfully.');
    } else {
      console.log('Seed: Experience already exists, skipping...');
    }
  }
}
