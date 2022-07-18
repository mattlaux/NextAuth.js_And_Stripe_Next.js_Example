import type { PrismaClient } from "@prisma/client";

declare global {
  // supports global prisma client for use in development in sharedClient file
  // let and const cause errors to be thrown in the Prisma sharedClient file
  // https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
  // eslint-disable-next-line no-var
  var prisma: PrismaClient;
}
