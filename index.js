// import { PrismaClient} from '@prisma/client'
const {PrismaClient} = require('@prisma/client')
//import { join } from '@prisma/client/runtime'

const prisma = new PrismaClient()
// Fetch zero or more Posts
// const posts = await prisma.post.findMany()

async function main() {
    await prisma.$connect()
    await prisma.user.create({
        data: {
            name: "chowder",
            email: "chowder22@gmail.com",
            posts: {
                create: {
                    title: "cora for president",
                    body: "one flew over, but can one fly",
                    slug: "initial test post",
                }
            }

        }
    })
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        }
    })
    console.dir(allUsers, {depth: null})
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        prisma.$disconnect()
    })
