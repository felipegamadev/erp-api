import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
    UseGuards
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { LoginDto } from './auth.dto'
import { Request, Response } from 'express'

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

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Post('logout')
    public async onLogout(
        @Req() request: Request,
        @Res() response: Response
    ): Promise<void> {
        await this.authService.onLogout(request, response)
        response.json({
            message: 'Logout successful'
        })
    }
}
