import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from 'src/common';

@Injectable()
export class SkillsSeedService implements OnModuleInit {
  constructor(
    @InjectModel(Skill.name)
    private skillModel: Model<SkillDocument>,
  ) {}

  async onModuleInit() {
    await this.seedSkills();
  }

  async seedSkills() {
    console.log('Seed: Creating skills...');

    const skills = [
      // Frontend
      { name: 'Html', level: 95, trackName: 'Frontend' },
      { name: 'Css', level: 90, trackName: 'Frontend' },
      { name: 'Bootstrap', level: 80, trackName: 'Frontend' },
      { name: 'React', level: 60, trackName: 'Frontend' },

      // Backend
      { name: 'Nodejs', level: 95, trackName: 'Backend' },
      { name: 'Nestjs', level: 90, trackName: 'Backend' },
      { name: 'ExpressJs', level: 95, trackName: 'Backend' },

      // Programming Language
      { name: 'JavaScript', level: 90, trackName: 'Programming Language' },
      { name: 'TypeScript', level: 90, trackName: 'Programming Language' },
      { name: 'C++', level: 80, trackName: 'Programming Language' },

      // Database / Cache
      { name: 'MongoDB', level: 90, trackName: 'Database' },
      { name: 'MySQL', level: 85, trackName: 'Database' },
      { name: 'Postgres', level: 85, trackName: 'Database' },
      { name: 'Redis', level: 95, trackName: 'Database' },
      // ORm / Cache
      { name: 'Prisma', level: 90, trackName: 'ORM' },
      { name: 'sequelize', level: 95, trackName: 'ORM' },
      { name: 'Mongoose', level: 95, trackName: 'ORM' },

      // DevOps
      { name: 'Docker', level: 75, trackName: 'DevOps' },
      { name: 'AWS', level: 70, trackName: 'DevOps' },
    ];

    for (const skill of skills) {
      await this.skillModel.updateOne(
        { name: skill.name },
        { $set: skill },
        { upsert: true },
      );
    }

    console.log('Seed: Skills seeded successfully.');
  }
}
