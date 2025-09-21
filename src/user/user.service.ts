import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { type User } from '@prisma/client'

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    public async findById(id: string): Promise<User | null> {
        return await this.prismaService.user.findUnique({
            where: { id }
        })
    }

    public async findByEmail(email: string): Promise<User | null> {
        return await this.prismaService.user.findUnique({
            where: { email }
        })
    }
}
