import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Res
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './auth.dto'
import { Response } from 'express'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    public async onLogin(
        @Body() loginDto: LoginDto,
        @Res({ passthrough: true }) response: Response
    ): Promise<void> {
        await this.authService.onLogin(loginDto, response)
        response.json({
            message: 'Login successful'
        })
    }
}
