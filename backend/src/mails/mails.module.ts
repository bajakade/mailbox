import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MailsController],
  providers: [MailsService],
  imports: [PrismaModule],
})
export class MailsModule {}
