/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Document & { data: any };

// I Have just made it any so that I can all type of data without deciding the attributes names , but of course 
// we can decide the schema of each user how to should be according to request

@Schema()
export class Student {
  @Prop({ type: Object })
  data: any;
}

export const StudentSchema = SchemaFactory.createForClass(Student);