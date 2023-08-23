import { PrismaClient } from '@prisma/client'
import { readReplicas } from '@prisma/extension-read-replicas'

const prisma = new PrismaClient()
  .$extends(readReplicas({
    url: process.env.DATABASE_REPLICA_URL!
  }))

// A `main` function so that we can use async/await
async function main() {
  await prisma.post.createMany({
    data: [
      { title: 'Prisma Client now supports read replication' },
      { title: 'Try out the new `@prisma/extension-read-replicas` extension with Neon'}
    ]
  })

  console.log('Feed from Replica: ', await prisma.post.findMany())
  console.log('Feed from Primary: ', await prisma.$primary().post.findMany())
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
