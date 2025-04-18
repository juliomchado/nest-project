import { Module } from "@nestjs/common";
import { PrismaService } from "./database/prisma/prisma.service";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";

import { envSchema } from "./env";
import { HttpModule } from "./http/http.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
