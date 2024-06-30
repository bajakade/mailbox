import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create two dummy articles

  await prisma.user.upsert({
    where: { email: 'bashhau@gmail.com' },
    update: {},
    create: {
      email: 'bashhau@gmail.com',
      firstName: 'Bashir',
      lastName: 'Ibrahim',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
