# Read Replicas example

This example shows how to use database replication using the  [`@prisma/extension-read-replicas`](https://github.com/prisma/read-replicas-extension) extension in [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) in a **simple TypeScript script** to read and write data in a PostgreSQL database. 

## Getting started

### 1. Download example and install dependencies


Clone this repository:

```bash
git clone git@github.com:prisma/read-replicas-demo.git --depth=1
```

Install npm dependencies:

```bash
cd read-replicas-demo
npm install
```

</details>

### 2. Create the database

Run the following command to create your PostgreSQL database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```bash
npx prisma migrate dev --name init
```

### 3. Run the script

Execute the script with this command: 

```bash
npm run dev
```

## Next steps

- Check out the [Prisma docs](https://www.prisma.io/docs)
- Create issues and ask questions on [GitHub](https://github.com/prisma/prisma/)
- Watch our biweekly "What's new in Prisma" livestreams on [Youtube](https://www.youtube.com/channel/UCptAHlN1gdwD89tFM3ENb6w)
