// Service for authentication logic: login, register, JWT, password hashing
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';

// DTO for login requests
export interface LoginDto {
  email: string;
  password: string;
}

// DTO for registration requests (minimal required fields)
export interface RegisterDto {
  email: string;
  password: string;
  username: string;
  // Optional profile fields
  first_name?: string;
  last_name?: string;
  display_name?: string;
  phone_number?: string;
  current_residence_pincode?: string;
  birth_place_pincode?: string;
  birth_date?: string;
  gender?: string;
  first_language?: string;
  religion?: string;
  second_language?: string;
  third_language?: string;
  fourth_language?: string;
  fifth_language?: string;
}

/**
 * AuthService: handles authentication, registration, JWT, and password security
 */
@Injectable()
export class AuthService {
  private readonly jwtSecret =
    process.env.JWT_SECRET || 'your-secret-key-change-in-production';
  private readonly jwtExpirationTime = '24h';

  constructor(private userService: UserService) {
    // Warn if using default JWT secret in production
    if (
      process.env.NODE_ENV === 'production' &&
      this.jwtSecret === 'your-secret-key-change-in-production'
    ) {
      console.warn(
        'WARNING: Using default JWT secret in production. Please set JWT_SECRET environment variable.',
      );
    }
  }

  /**
   * Authenticates a user with email and password
   * @param loginDto - Login credentials
   * @returns Promise containing user data and JWT token
   * @throws UnauthorizedException if credentials are invalid
   */

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      // Use generic error message to prevent user enumeration
      throw new UnauthorizedException('Invalid email or password');
    }

    // Validate password
    const isPasswordValid = await this.userService.validatePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      // Use same error message as above to prevent user enumeration
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate JWT token with user information
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        username: user.username,
      },
      this.jwtSecret,
      { expiresIn: this.jwtExpirationTime },
    );

    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        display_name: user.display_name,
        first_name: user.first_name,
        last_name: user.last_name,
      },
      token,
    };
  }

  /**
   * Registers a new user with minimal required information
   * @param registerDto - Registration data including email, password, and username
   * @returns Promise containing new user data and JWT token
   * @throws ConflictException if email or username already exists
   */

  async register(registerDto: RegisterDto) {
    const { email, username, password } = registerDto;

    // Check if user already exists
    const existingUserByEmail = await this.userService.findUserByEmail(email);
    if (existingUserByEmail) {
      throw new ConflictException('User with this email already exists');
    }

    const existingUserByUsername =
      await this.userService.findUserByUsername(username);
    if (existingUserByUsername) {
      throw new ConflictException('Username already taken');
    }

    // Create user with minimal required fields - defaults are handled in UserService
    const newUser = await this.userService.createUser({
      email,
      username,
      password,
    });

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: newUser.id,
        email: newUser.email,
        username: newUser.username,
      },
      this.jwtSecret,
      { expiresIn: '24h' },
    );

    return {
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
        display_name: newUser.display_name,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
      },
      token,
    };
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
