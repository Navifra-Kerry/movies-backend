import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: `${
        process.env.UPLOAD_PATH ? process.env.UPLOAD_PATH : './uploads'
      }`,
    }),
  ],
  controllers: [UploadController],
})
export class UploadModule {}
