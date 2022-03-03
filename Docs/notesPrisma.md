
# Notes

```shell
echo "# bahim22" >> README.md
git init
git add README.md
git commit -m "init commit message"
git branch -M master
git remote add origin https://github.com/bahim22/REPO.git
git push -u origin master
```

## Prisma Notes from master ts branch

```sh
npm install @prisma/client
```

init setup invokes prisma generate auto; changes afterwards needs prisma generate script called explicity for the  Prisma Client API.

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

1. Set the DB_URL in the .env file to point to your existing DB.
2. Set the provider of the datasource block in schema.prisma to match your DB: postgresql, mysql, sqlite, sqlserver or mongodb (Preview).
3. Run prisma db pull to turn your DB schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your DB.
