import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'
import { TokenModule } from '../token/token.module'
import { CookieModule } from '../cookie/cookie.module'

@Module({
    imports: [UserModule, TokenModule, CookieModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
