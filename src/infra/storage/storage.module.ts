import { Module } from "@nestjs/common";

import { Encrypter } from "@/domain/forum/application/cryptography/encrypter";
import { HashComparer } from "@/domain/forum/application/cryptography/hash-comparer";
import { HashGenerator } from "@/domain/forum/application/cryptography/hash-generator";

import { Uploader } from "@/domain/forum/application/storage/uploader";
import { R2Storage } from "./r2-storage";
import { EnvModule } from "../env/env.module";

@Module({
  imports: [EnvModule],
  providers: [{ provide: Uploader, useClass: R2Storage }],
  exports: [Uploader],
})
export class StorageModule {}
