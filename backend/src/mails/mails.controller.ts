import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MailsService } from './mails.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MailEntity } from './entities/mail.entity';
import { SkipThrottle } from '@nestjs/throttler';
import { PaginationQueryDTO } from 'src/prisma/dto/paginate';

@Controller('mails')
@ApiTags('Mails')
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @Post()
  @ApiCreatedResponse({ type: MailEntity })
  create(@Body() createMailDto: CreateMailDto) {
    return this.mailsService.create(createMailDto);
  }

  @Get()
  @ApiOkResponse({ type: MailEntity, isArray: true })
  @SkipThrottle()
  findAll(@Query() query: PaginationQueryDTO) {
    return this.mailsService.findAll({ ...query });
  }

  @Get(':id')
  @ApiOkResponse({ type: MailEntity })
  findOne(@Param('id') id: string) {
    return this.mailsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MailEntity })
  @SkipThrottle()
  update(@Param('id') id: string, @Body() updateMailDto: UpdateMailDto) {
    return this.mailsService.update(id, updateMailDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MailEntity })
  remove(@Param('id') id: string) {
    return this.mailsService.remove(id);
  }

  @Get('info/status')
  info() {
    return this.mailsService.summary();
  }
}
