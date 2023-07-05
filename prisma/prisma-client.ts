import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

interface CustomNodeJsGlobal extends Global {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.MODE === "dev") global.prisma = prisma;

export default prisma;
