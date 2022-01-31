import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient

async function main() {
    // Connect the client
    await prisma.$connect()
    // ...you will write your Prisma Client queries here
    // read all user records from db and print
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
