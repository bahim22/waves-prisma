
# Prisma Notes

```sh
npm install @prisma/client
```

- init setup invokes prisma generate auto; changes afterwards needs prisma generate script called explicity for the  `Prisma Client` API.
- `Prisma Client` is an auto-generated and type-safe query builder

___

```ts
main()
    .catch((e))
(method) Promise<void>.catch<TResult>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined): Promise<void | TResult>
```

Attaches a callback for only the rejection of the Promise.
@param onrejected — The callback to execute when the Promise is rejected.
@returns — A Promise for the completion of the callback.
___

## Steps

1. Import the PrismaClient constructor from the @prisma/client node module
2. Instantiate PrismaClient
3. Define an async function named main to send queries to the db
4. Connect to the db
5. Call the main function
6. Close the db connections when the script terminates
7. create queries
   1. mongoDb + Prisma: have to manually create schema and has to match data in db
8. run node index.js

```js
const prisma = new PrismaClient()

async function main() {
    await prisma.$connect()
    // Fetch zero or more Posts
    const posts = await prisma.post.findMany()

    // Get all Users
    const users = await prisma.user.findMany()

    // Get first 10 Users
    const users = await prisma.user.findMany({ take: 10 })

    // Only select the `id`
    const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
    }

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        prisma.$disconnect
    })
```

# Prisma

- install prisma as -D
- run npx prisma init
- set up db connection string in schema file

Next steps:

1. Use the .env file for DB_URL then set provider info in schema
2. Run prisma db pull to turn your DB schema into a Prisma schema.
3. Use MongoDB Compass or PostgreSQL to create data or use sample data so Prisma can introspect a schema based on sample data in DB
4. Prisma will then inferr the schema, then you can init prisma
5. Run prisma generate to generate the Prisma Client. You can then start querying your DB.
6. use @relation attribute to join data to PrCl
7. install prisma client, query db, run code, write data into db w more queries
8. view data in npx `prisma studio`, add frontend
