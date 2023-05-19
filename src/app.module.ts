import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { ArticleModule } from './articles/article.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    StudentModule,
    ArticleModule,
    MongooseModule.forRoot(
      'mongodb+srv://Admin:TMwo2L3Qsbh6dxgJ@cluster0.t8bhi.azure.mongodb.net/',
    ),
  ],
})
export class AppModule {}
