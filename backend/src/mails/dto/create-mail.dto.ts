import { ApiProperty } from '@nestjs/swagger';

export class CreateMailDto {
  @ApiProperty()
  subject: string;

  @ApiProperty()
  content: string;

  @ApiProperty({ required: false, default: false })
  isRead?: boolean;
}
