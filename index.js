import { PrismaClient} from '@prisma/client'
//import { join } from '@prisma/client/runtime'

const prisma = new PrismaClient()
// Fetch zero or more Posts
// const posts = await prisma.post.findMany()

async function main() {
    await prisma.$connect()
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect
    })
