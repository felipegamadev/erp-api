import { IsEmail, IsString, IsNotEmpty } from 'class-validator'
import { type User } from '@prisma/client'

export class ProfileDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsEmail()
    email: string

    constructor(user: User) {
        this.name = user.name
        this.email = user.email
    }
}
