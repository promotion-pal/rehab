import { PrismaClient } from "../../node_modules/prisma/prisma-client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

export { prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
