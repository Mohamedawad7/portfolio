import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactInfo, ContactDocument } from 'src/common';

@Injectable()
export class ContactSeedService implements OnModuleInit {
  constructor(
    @InjectModel(ContactInfo.name)
    private contactModel: Model<ContactDocument>,
  ) {}

  async onModuleInit() {
    await this.seedContact();
  }

  async seedContact() {
    console.log('Seed: Creating contact info...');

    const contactData = {
      email: 'mohamedahmedawd180@gmail.com',
      github: 'https://github.com/Mohamedawad114',
      leetcode: 'https://leetcode.com/u/Mohamed_Awad11/',
      facebook: 'https://www.facebook.com/profile.php?id=100056832761520',
      linkedin: 'https://www.linkedin.com/in/mohamed-awad-15300826a/',
      phone: '01016624425',
    };

    await this.contactModel.updateOne(
      {},
      { $set: contactData },
      { upsert: true },
    );

    console.log('Seed: Contact created successfully.');
  }
}
