import { Controller, Post, Body, Res, HttpStatus, HttpException } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthService, LoginDto, RegisterDto } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(
        @Body() loginDto: LoginDto,
        @Res() reply: FastifyReply,
    ) {
        try {
            // Validate input
            if (!loginDto.email || !loginDto.password) {
                throw new HttpException('Email and password are required', HttpStatus.BAD_REQUEST);
            }

            const result = await this.authService.login(loginDto);

            return reply.status(HttpStatus.OK).send({
                success: true,
                message: 'Login successful',
                user: result.user,
                token: result.token,
            });

        } catch (error) {
            return reply.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR).send({
                success: false,
                message: error.message || 'Login failed',
            });
        }
    }

    @Post('register')
    async register(
        @Body() registerDto: RegisterDto,
        @Res() reply: FastifyReply,
    ) {
        try {
            // Essential validation - only check minimal required signup fields
            if (!registerDto.email || !registerDto.password || !registerDto.username) {
                throw new HttpException('Email, password, and username are required', HttpStatus.BAD_REQUEST);
            }

            // Password strength validation
            if (registerDto.password.length < 6) {
                throw new HttpException('Password must be at least 6 characters long', HttpStatus.BAD_REQUEST);
            }

            const result = await this.authService.register(registerDto);

            return reply.status(HttpStatus.CREATED).send({
                success: true,
                message: 'Registration successful! You can complete your profile later.',
                user: result.user,
            });

        } catch (error) {
            return reply.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR).send({
                success: false,
                message: error.message || 'Registration failed',
            });
        }
    }

    @Post('logout')
    async logout(@Res() reply: FastifyReply) {
        return reply.status(HttpStatus.OK).send({
            success: true,
            message: 'Logout successful',
        });
    }
}
