/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from '../schemas/student.schema';
import  axios  from 'axios';
import { Logger } from '@nestjs/common';


@Injectable({})
export class StudentService {
    constructor(@InjectModel('Student') private studentModel: Model<Student>) { }

        async getStudentsNames() {
            try {
                const users = [];
                for (let i = 0; i < 990; i++) {
                    const response = await axios.get('https://randomuser.me/api/');
                    const user = new this.studentModel({
                        data: response.data.results[0].name,
                    });

                    await users.push(user);
                }
                Logger.log('i am here2');
                const savedUsers = await this.studentModel.insertMany(users);

            } catch (error) {
                console.error('Error:', error);
            }
            }

        // since we are making alot of requests to this API maybe we can requests limiter so that we can free the system and not overload it, but 1000 requests is not alot
        // secondly getting all requests then store them in data base is better approach than opening and closing data base with each request
        async getStudents() {
            try {
                const users = [];
                for (let i = 0; i < 1000; i++) {
                    const response = await axios.get('https://randomuser.me/api/');
                    Logger.log(response.data.results);
                    const user = new this.studentModel({
                        data: response.data,
                    });

                    await users.push(user);
                }

                const savedUsers = await this.studentModel.insertMany(users);
                //Logger.log(savedUsers);

            } catch (error) {
                console.error('Error:', error);
            }
            }

        //Function below getting all users And store them all at once with 1 _id , but if we wish 
        // we can loop through the response and store each object independently
        async getStudentsAtOnceApi() {
            try {
                const response = await axios.get('https://randomuser.me/api/0.8/?results=5');

                 const user = new this.studentModel({
                     data: response.data.results,
                 });

                const savedUsers = await this.studentModel.insertMany(user);

            } catch (error) {
                console.error('Error:', error);
            }
        }

}