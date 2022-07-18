import { PrismaClient } from "@prisma/client";
import type { PrismaClient as PrismaClientType } from "@prisma/client";

let prisma: PrismaClientType;

// Nextjs Fast Refresh causes many instances of the Prisma client to open during development
// This restricts one Prisma client for development and one for production
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
// https://github.com/prisma/prisma/issues/6219
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
