
# Prisma

```sh
npm install @prisma/client
```

init setup invokes prisma generate auto; changes afterwards needs prisma generate script called explicity for the  Prisma Client API.

```ts
main()
    .catch((e))
(method) Promise<void>.catch<TResult>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined): Promise<void | TResult>
```

Attaches a callback for only the rejection of the Promise.

@param onrejected — The callback to execute when the Promise is rejected.

@returns — A Promise for the completion of the callback.

Import the PrismaClient constructor from the @prisma/client node module
Instantiate PrismaClient
Define an async function named main to send queries to the database
Connect to the database
Call the main function
Close the database connections when the script terminates
