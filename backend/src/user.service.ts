// Service for user creation and password hashing
import { Injectable } from '@nestjs/common';
import { User } from '../generated/prisma';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcryptjs';

// DTO for creating a user (with optional profile fields)
export interface CreateUserDto {
  email: string;
  password: string;
  username: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  phone_number?: string;
  current_residence_pincode?: string;
  birth_place_pincode?: string;
  birth_date?: Date;
  gender?: string;
  first_language?: string;
  religion?: string;
  second_language?: string;
  third_language?: string;
  fourth_language?: string;
  fifth_language?: string;
}

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Creates a new user with hashed password and default values
  async createUser(userData: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const userDataWithDefaults = {
      email: userData.email,
      password: hashedPassword,
      username: userData.username,
      first_name:
        userData.first_name ||
        userData.username.charAt(0).toUpperCase() + userData.username.slice(1),
      last_name: userData.last_name || '',
      display_name: userData.display_name || userData.username,
      phone_number: userData.phone_number || 'Not provided',
      current_residence_pincode: userData.current_residence_pincode || '000000',
      birth_place_pincode: userData.birth_place_pincode || '000000',
      birth_date: userData.birth_date || new Date('1990-01-01'),
      gender: userData.gender || 'not_specified',
      first_language: userData.first_language || 'English',
      religion: userData.religion,
      second_language: userData.second_language,
      third_language: userData.third_language,
      fourth_language: userData.fourth_language,
      fifth_language: userData.fifth_language,
    };
    return this.prisma.user.create({
      data: userDataWithDefaults,
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  async validatePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
