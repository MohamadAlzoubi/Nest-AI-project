/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import { Student } from '../schemas/student.schema';
import  axios  from 'axios';

@Injectable({})
export class ArticleService {
    constructor(@InjectModel('Student') private studentModel: Model<Student>) { }

  async getStudentsArticlesPoints(date){
    try {
        // Logger.log(date.year)
        // Logger.log(typeof(date.day))
        // Logger.log(date.month)
        const students = await this.studentModel.find().exec();
        const response = await axios.get(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/tr.wikipedia/all-access/${date.year}/${date.month}/${date.day}`);
        //Logger.log('Response:', response.data)
        for(let i = 0; i < 10 ; i++) {
            // Logger.log(students[i].data.first + students[i].data.last);
            // Logger.log('Response:', response.data.items[0].articles[i].article);
            Logger.log('type of :', typeof(response.data.items[0].articles[i].article)  , typeof(students[i].data.first + students[i].data.last));
        }
        
      } catch (error) {
        Logger.error('Error fetching users:', error);
        throw error;
      }
  }
}

function circularSafeStringify(obj: any): string {
    const cache = new Set();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          // Circular reference found, discard key
          return;
        }
        cache.add(value);
      }
      return value;
    });
  }

