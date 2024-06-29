import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailsService } from './mails.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MailEntity } from './entities/mail.entity';

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
  findAll() {
    return this.mailsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MailEntity })
  findOne(@Param('id') id: string) {
    return this.mailsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MailEntity })
  update(@Param('id') id: string, @Body() updateMailDto: UpdateMailDto) {
    return this.mailsService.update(+id, updateMailDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MailEntity })
  remove(@Param('id') id: string) {
    return this.mailsService.remove(+id);
  }
}
