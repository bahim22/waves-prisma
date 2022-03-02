
# Notes

```shell
echo "# bahim22" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/bahim22/bahim22.git
git push -u origin master
```

# Prisma

Next steps:

1. Set the DB_URL in the .env file to point to your existing DB.
2. Set the provider of the datasource block in schema.prisma to match your DB: postgresql, mysql, sqlite, sqlserver or mongodb (Preview).
3. Run prisma db pull to turn your DB schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your DB.
