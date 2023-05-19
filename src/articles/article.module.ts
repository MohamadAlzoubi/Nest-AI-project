/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Student, StudentSchema } from '../schemas/student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
    controllers: [ArticleController],
    providers: [ArticleService]
})
export class ArticleModule { };