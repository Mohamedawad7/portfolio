import { Module } from "@nestjs/common";
import { skillModel, SkillRepository } from "src/common";
import { SkillServices } from "./skill.service";
import { SkillController } from "./skill.controller";
import { SkillsSeedService } from "./seed.service";

@Module({
    imports: [skillModel],
    providers: [SkillRepository, SkillServices,SkillsSeedService],
    controllers:[SkillController]
})
export class SkillModule{}