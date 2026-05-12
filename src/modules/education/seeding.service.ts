import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Education, EducationDocument } from 'src/common/models/education.model';

@Injectable()
export class EducationSeedService implements OnModuleInit {
  constructor(
    @InjectModel(Education.name)
    private educationModel: Model<EducationDocument>,
  ) {}

  async onModuleInit() {
    await this.seedEducation();
  }

  async seedEducation() {
    const exists = await this.educationModel.findOne({});

    if (!exists) {
      console.log('Seed: Creating education document...');

      const educationData = {
        university: 'Mansoura University',
        college: 'Engineering',
        department: 'Computer and Control Systems',
        graduationYear: 2028,
        relativeCoursers: ['Basics Network', 'Data Structure', 'OOP', 'AI'],
      };

      await this.educationModel.create(educationData);

      console.log('Seed: Education created successfully.');
    } else {
      console.log('Seed: Education already exists, skipping...');
    }
  }
}
