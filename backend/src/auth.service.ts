import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';

export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    email: string;
    password: string;
    username: string;
    // All other fields are optional and will be populated with defaults
    first_name?: string;
    last_name?: string;
    display_name?: string;
    phone_number?: string;
    current_residence_pincode?: string;
    birth_place_pincode?: string;
    birth_date?: string; // Will be converted to Date
    gender?: string;
    first_language?: string;
    religion?: string;
    second_language?: string;
    third_language?: string;
    fourth_language?: string;
    fifth_language?: string;
}

@Injectable()
export class AuthService {
    private readonly jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

    constructor(private userService: UserService) { }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;

        // Find user by email
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        // Validate password
        const isPasswordValid = await this.userService.validatePassword(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                username: user.username
            },
            this.jwtSecret,
            { expiresIn: '24h' }
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

    async register(registerDto: RegisterDto) {
        const { email, username, password } = registerDto;

        // Check if user already exists
        const existingUserByEmail = await this.userService.findUserByEmail(email);
        if (existingUserByEmail) {
            throw new ConflictException('User with this email already exists');
        }

        const existingUserByUsername = await this.userService.findUserByUsername(username);
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
                username: newUser.username
            },
            this.jwtSecret,
            { expiresIn: '24h' }
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
