import { ApiProperty } from "@nestjs/swagger";
import { Mail } from "@prisma/client";

export class MailEntity implements Mail {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    subject: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    isRead: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    readAt: Date;
}
