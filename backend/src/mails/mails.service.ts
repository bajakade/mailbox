import {
  PaginateFunction,
  PaginatedResult,
  PaginationQueryDTO,
  paginator,
} from 'src/prisma/dto/paginate';

import { CreateMailDto } from './dto/create-mail.dto';
import { Injectable } from '@nestjs/common';
import { Mail } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMailDto } from './dto/update-mail.dto';

const paginate: PaginateFunction = paginator({ perPage: 5 });

@Injectable()
export class MailsService {
  constructor(private prisma: PrismaService) {}

  create(createMailDto: CreateMailDto) {
    return this.prisma.mail.create({ data: createMailDto });
  }

  findAll({
    page,
    perPage,
  }: PaginationQueryDTO): Promise<PaginatedResult<Mail>> {
    return paginate(this.prisma.mail, {}, { page, perPage });
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

  async summary() {
    const total = await this.prisma.mail.count({ where: { isRead: false } });
    return {
      totalUnread: total,
      user: 'Bashir Ibrahim',
    };
  }
}
