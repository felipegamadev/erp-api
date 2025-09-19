import { PrismaClient } from '@prisma/client'
import { v7 as uuidv7 } from 'uuid'
import * as argon2 from 'argon2'

const prisma = new PrismaClient()

async function main(): Promise<void> {
    const hashedPassword = await argon2.hash('12345678', {
        type: argon2.argon2id
    })

    await prisma.user.createMany({
        data: [
            {
                id: uuidv7(),
                name: 'Test User',
                email: 'test@example.com',
                password: hashedPassword
            }
        ]
    })

    console.log('Seed successfully executed!')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
