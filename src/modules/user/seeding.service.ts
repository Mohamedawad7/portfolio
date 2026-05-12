import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gender, User, UserDocument } from 'src/common';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async onModuleInit() {
    await this.seedUser();
  }

  async seedUser() {
    const adminExists = await this.userModel.findOne({
      username: 'Mohamed Awad',
    });

    if (!adminExists) {
      console.log('Seed: Creating default user...');

      const userData = {
        username: 'Mohamed Awad',
        dateBirth: new Date('2005-01-20'),
        gender: Gender.male,
        bio: 'Backend Engineer | Node.js & NestJS Developer',
        aboutMe:
          'Backend Engineer and Computer & Control Systems Engineering student at Mansoura University passionate about building scalable, secure, and high-performance backend systems. Experienced in developing production-ready applications using Node.js, NestJS, Express.js, MongoDB, PostgreSQL, MySQL, and Redis, with a strong focus on clean architecture, system design, and backend best practices. Continuously evolving toward becoming a Full Stack and AI Engineer by exploring modern frontend technologies, AI integrations, and intelligent application development to create innovative real-world solutions.',
        slogan: 'Backend Engineer Evolving into Full Stack AI Development',
        CVLink:
          'https://drive.google.com/uc?export=download&id=1rRL1xwk-hiYAMT2ZwwsCBhLhGFWSahls',
        password: 'Mo.awad4444',
        position: 'Backend Engineer',
      };

      await this.userModel.create(userData);
      console.log('Seed: User created successfully.');
    } else {
      console.log('Seed: User already exists, skipping...');
    }
  }
}
