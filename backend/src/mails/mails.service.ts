import { CreateMailDto } from './dto/create-mail.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMailDto } from './dto/update-mail.dto';

@Injectable()
export class MailsService {
  constructor(private prisma: PrismaService) {}

  create(createMailDto: CreateMailDto) {
    return this.prisma.mail.create({ data: createMailDto });
  }

  findAll() {
    return this.prisma.mail.findMany({});
  }

  findOne(id: string) {
    return this.prisma.mail.findUnique({ where: { id } });
  }

  update(id: string, _: UpdateMailDto) {
    return this.prisma.mail.update({
      where: { id },
      data: { isRead: true },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} mail`;
  }
}
