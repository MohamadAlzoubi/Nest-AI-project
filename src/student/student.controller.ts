/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Logger } from '@nestjs/common';

@Controller()
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('users/getStudentsName')
  getStudentsNames() {
    this.studentService.getStudentsNames();
  }

  @Post('users/getStudents')
  getStudents() {
    this.studentService.getStudents();
  }

  @Post('users/getAllStudents')
  getStudentsAtOnceApi() {
    this.studentService.getStudentsAtOnceApi();
  }
}
