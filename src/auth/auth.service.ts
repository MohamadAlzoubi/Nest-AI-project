/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';

@Injectable({})
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  signin() {
    return 'i am sign in';
  }
  signup() {
    return 'i am signup';
  }
  async createUser(): Promise<User> {
    const user = new this.userModel({ name: 'ahmed', email: 'test@test222' });
    return user.save();
  }
}
