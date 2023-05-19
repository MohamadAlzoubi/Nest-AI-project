/* eslint-disable prettier/prettier */
import { Controller, Post, Param, BadRequestException, Logger } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller()
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post('users/student_articles_points/:year/:month/:day')
  getStudentsArticlesPoints(@Param() params: Record<string, string>) {
    const { year, month, day } = params;

    const parsedDate = new Date(`${year}-${month}-${day}`);
    const date = { year, month, day };

    if (isNaN(parsedDate.getTime())) {
      throw new BadRequestException('Invalid date format. Please use the format YYYY/MM/DD.');
    }

    this.articleService.getStudentsArticlesPoints(date);
  }
}